"use strict";
let express = require("express");
let cors = require("cors");
let app = express();
const logger = require('morgan');
let router = express.Router();

app.use(cors());
app.use(logger('dev'));

app.get("/products/:id", function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

app.listen(80, function () {
  console.log("CORS-enabled web server listening on port 80");
});

// express = require("express");
// app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3000);



// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', function(req, res) {
  res.send('PoligonoApp home page');
});
// define the about route
router.get('/about', function(req, res) {
  res.send('About PoligonoApp');
});
module.exports = router;
export default router;
