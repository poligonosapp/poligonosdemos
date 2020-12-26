import router from "./Routes";
import { response } from "express";

let express = require("express");
let cors = require("cors");
let app = express();

app.route('/mapa')
  .get(function(req, res) {
    res.send('Get a random map');
  })
  .post(function(req, res) {
    res.send('Add a map');
  })
  .put(function(req, res) {
    res.send('Update the map');
  });

module.exports = response;
export default response;
