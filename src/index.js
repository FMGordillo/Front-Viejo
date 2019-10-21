import React from "react";
import axe from "react-axe";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "./react-auth0-spa"
import config from "./auth_config.json";

import Main from "./components/MainRouter";

import store from "./redux/store";

/**
 * TODO: Audit -> visible inside Chrome Devtools (F12) or Console
 */

const onRedirectCallback = appState => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

if (process.env.NODE_ENV !== "production") {
  axe(React, ReactDOM, 1000);
}

ReactDOM.render(
  <Provider store={store}>
    <Auth0Provider
  domain={config.domain}
  client_id={config.clientId}
  redirect_uri={window.location.origin}
  onRedirectCallback={onRedirectCallback}
  >
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Auth0Provider>
  </Provider>,
  document.getElementById("app")
);
