import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";

// babel loader
require("@babel/core").transform("code", {
  plugins: ["@babel/plugin-transform-modules-amd"],
});

require("@babel/core").transform("code", {
  plugins: ["@babel/plugin-transform-modules-commonjs"],
});

require("@babel/core").transform("code", {
  plugins: ["@babel/plugin-transform-modules-systemjs"],
});

require("@babel/core").transform("code", {
  plugins: ["@babel/plugin-transform-modules-umd"],
});

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector("#root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
