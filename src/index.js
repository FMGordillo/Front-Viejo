import React from "react";
import axe from "react-axe";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Main from "./components/MainRouter";

import store from "./redux/store";

/**
 * TODO: Audit -> visible inside Chrome Devtools (F12) or Console
 */
if (process.env.NODE_ENV !== "production") {
  axe(React, ReactDOM, 1000);
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </Provider>,
  document.getElementById("app")
);
