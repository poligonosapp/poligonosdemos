// @ts-ignore

import express from "express";
import * as Sentry from "@sentry/node";

// or using CommonJS
// const express = require('express');
// const Sentry = require('@sentry/node');

const app = express();

Sentry.init({ dsn: "https://examplePublicKey@o0.ingest.sentry.io/0" });

// The request handler must be the first middleware on the app
app.use(Sentry.Handlers.requestHandler());

// All controllers should live here
app.get("/", function rootHandler(req, res) {
  res.end("Hello world!");
});

// The error handler must be before any other error middleware and after all controllers
app.use(Sentry.Handlers.errorHandler());

// Optional fallthrough error handler
app.use(function onError(err, req, res, next) {
  // The error id is attached to `res.sentry` to be returned
  // and optionally displayed to the user for support.
  res.statusCode = 500;
  res.end(res.sentry + "\n");
});

app.listen(3000);

// let admin = require('firebase-admin');// firebase admin node backend

//let express     = require('express');
import express from 'express';
let bodyParser  = require('body-parser');
let passport	= require('passport');
// let mongoose    = require('mongoose');
let config      = require('./config/config');
let port        = process.env.PORT || 5000;
let cors        = require('cors');
 
let app = express();
app.use(cors());
 
// get our request parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 
// Use the passport package in our application
app.use(passport.initialize());
let passportMiddleware = require('./middleware/passport');
passport.use(passportMiddleware);
 
// Demo Route (GET http://localhost:5000)
app.get('/', function(req, res) {
  return res.send('Hello! The API is at http://localhost:' + port + '/api');
});
 
routes = require('./routes');
app.use('/api', routes);
 
 
// Start the server
app.listen(port);
console.log('There will be dragons: http://localhost:' + port);//jwt...


const defaultAppConfig = process.env.DEFAULT_CONFIG;
const otherAppConfig = process.env.OTHER_APP_CONFIG;


let serviceAccount = require("./google-services.json");



