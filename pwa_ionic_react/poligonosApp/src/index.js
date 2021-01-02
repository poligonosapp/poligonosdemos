import React from "react";
import { render, ReactDOM} from "react-dom";

const $ = require("jquery");
console.log("webpack jquery ionic react ...");
$("#target").html("Polígono");

if (process.env.NODE_ENV !== 'production') {
   console.log('Looks like we are in development mode!');
 }

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

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
 reportWebVitals();
reportWebVitals(console.log);
