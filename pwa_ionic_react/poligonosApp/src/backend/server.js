var express = require("express");
var cors = require("cors");
var app = express();

app.use(cors());

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
