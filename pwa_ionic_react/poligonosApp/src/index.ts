import App from './App';
import Tab1 from './pages/Tab1'
 
 // const window.$ = window.$;

import _ from 'lodash';
import printMe from './print.js';

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/service-worker.js')
            .then((registration) => {
                console.log('SW registered: ', registration)
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError)
            })
    })
}

 import React from 'react'
 import { render } from 'react-dom'
 import './index.css'
 import './src/theme/style.css' 
 import './src/theme/variables.css' 
 
// let React = require('react');
// let ReactDOM = require('react-dom');



// import $ from "jquery";
import $ from "expose-loader?exposes[]=$&exposes[]=jQuery!jquery";
// Adds the `jquery` to the global object under the names `$` and `jQuery`
import { concat } from "expose-loader?exposes=_.concat!lodash/concat";

import {
    map,
    reduce,
  } from "expose-loader?exposes[]=_.map|map&exposes[]=_.reduce|reduce!underscore";

// const $ = require('jquery')
console.log('webpack jquery ionic react ...')
$('#target').html('Polígono')

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!')
}

// import * as serviceWorker from './serviceWorker'

// babel loader
// require('@babel/core').transform('code', {
 //   plugins: ['@babel/plugin-transform-modules-amd'],
// })

// require('@babel/core').transform('code', {
//    plugins: ['@babel/plugin-transform-modules-commonjs'],
// })

// require('@babel/core').transform('code', {
//    plugins: ['@babel/plugin-transform-modules-systemjs'],
// })

// require('@babel/core').transform('code', {
//    plugins: ['@babel/plugin-transform-modules-umd'],
// })



import { defineCustomElements } from '@ionic/pwa-elements/loader'

import reportWebVitals from './reportWebVitals'
// import UsingWorkbox from './UsingWorkbox'

// es6
// import { BrowserRouter } from 'react-router-dom';
// using CommonJS modules
// const BrowserRouter = require("react-router-dom").BrowserRouter;

// frontend failed to initialize
try{
    
    "use strict"
    ReactDOM.render(<App/>, document.getElementById('root'));

    defineCustomElements(window);

    ServiceWorker.unregister();

    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker
                .register('/service-worker.js')
                .then((registration) => {
                    console.log('SW registered: ', registration)
                })
                .catch((registrationError) => {
                    console.log('SW registration failed: ', registrationError)
                })
        })
    }
    
    reportWebVitals()
	
	reportWebVitals(console.log)
    
}catch(e){
    alert('Erro de inicialização');


    
}finally{
    alert('finally');
}

module.exports = {}


