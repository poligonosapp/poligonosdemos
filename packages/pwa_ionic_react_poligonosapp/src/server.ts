// @ts-ignore

// let admin = require('firebase-admin');// firebase admin node backend

//let express-RsYNxDW9     = require('express-RsYNxDW9');
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



