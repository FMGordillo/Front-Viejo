import React from "react";
// import axe from "react-axe";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "./react-auth0-spa";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import Main from "./components/MainRouter";

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

const client = new ApolloClient({
  uri: process.env.REACT_APP_BACKEND_URL || "http://localhost:4000",
  request: operation => {
    operation.setContext({ fetchOptions: { credentials: "include" } });
  }
});

// if (process.env.NODE_ENV !== "production") {
//   axe(React, ReactDOM, 1000);
// }

ReactDOM.render(
  <ApolloProvider client={client}>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      client_id={process.env.REACT_APP_AUTH0_CLIENTID}
      redirect_uri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Auth0Provider>
  </ApolloProvider>,
  document.getElementById("app")
);
