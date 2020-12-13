import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

console.log('\n webpack exists to read src index js \n');

// babel loader
require("@babel/core").transform("code", {
    plugins: ["@babel/plugin-transform-modules-amd"]
});

require("@babel/core").transform("code", {
    plugins: ["@babel/plugin-transform-modules-commonjs"]
});

require("@babel/core").transform("code", {
    plugins: ["@babel/plugin-transform-modules-systemjs"],
});

require("@babel/core").transform("code", {
    plugins: ["@babel/plugin-transform-modules-umd"]
});

ReactDOM.render(
    <React.StrictMode><App/></React.StrictMode>,
    document.querySelector('#app')
);
    // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
    serviceWorker.register();



