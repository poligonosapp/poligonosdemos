var express = require('express');
var app = express();

let admin = require('./admins');
let poligonos = require('./poligonos');
let response = require('./response');

// respond with "hello world" when a GET request is made to the homepage
app.get('/v1', async function (req, res) {
  res.send('hello world v1');
})

// GET method route
app.get('/v1', async function (req, res) {
  res.send('GET request to the homepage');
  })

  app.listen('/tab1', async function (req, res) {
    res.send(require('./pages/Tab1'));
  })
  app.listen('/tab2', async function (req, res) {
    res.send(require('./pages/Tab2'));
  })

  app.listen('/tab3', async function (req, res) {
    res.send(require('./pages/Tab3'));
  })

module.exports = {};
