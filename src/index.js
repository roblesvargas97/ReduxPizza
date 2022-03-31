import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import "./styles.css";
import "tw-elements";
import { store } from "./Store/Store";
import { Provider } from "react-redux";

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
