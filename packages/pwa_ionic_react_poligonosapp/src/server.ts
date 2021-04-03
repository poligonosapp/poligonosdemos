// @ts-ignore
let admin = require('firebase-admin');// firebase admin node backend

let express     = require('express');
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
 
mongoose.connect(config.db, { useNewUrlParser: true , useCreateIndex: true});
 
const connection = mongoose.connection;
 
connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});
 
connection.on('error', (err) => {
    console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
    process.exit();
});
 
// Start the server
app.listen(port);
console.log('There will be dragons: http://localhost:' + port);

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://poligonosapp-default-rtdb.firebaseio.com/'
});

admin.initializeApp({
  credential: admin.credential.refreshToken(refreshToken),
  databaseURL: process.env.FIREBASE_DATABASE_URL
});

// Initialize the default app
// var admin = require('firebase-admin');
let app = admin.initializeApp();

// Initialize the default app
let defaultApp = admin.initializeApp(defaultAppConfig);

console.log(defaultApp.name);  // '[DEFAULT]'

// Retrieve services via the defaultApp variable...
let defaultAuth = defaultApp.auth();
let defaultDatabase = defaultApp.database();

// ... or use the equivalent shorthand notation
defaultAuth = admin.auth();
defaultDatabase = admin.database();

// Initialize the default app
admin.initializeApp(defaultAppConfig);

// Initialize another app with a different config
let otherApp = admin.initializeApp(otherAppConfig, 'other');

// console.log(admin.app().name);  // '[DEFAULT]'
// console.log(otherApp.name);     // 'other'

// Use the shorthand notation to retrieve the default app's services
defaultAuth = admin.auth();
defaultDatabase = admin.database();

const defaultAppConfig = process.env.DEFAULT_CONFIG;
const otherAppConfig = process.env.OTHER_APP_CONFIG;

// Use the otherApp variable to retrieve the other app's services
let otherAuth = otherApp.auth();
let otherDatabase = otherApp.database();

let serviceAccount = require("./google-services.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DATABASE_URL
});

