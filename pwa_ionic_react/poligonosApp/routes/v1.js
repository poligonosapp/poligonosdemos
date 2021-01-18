var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/v1', function (req, res) {
  res.send('hello world v1')
})

// GET method route
app.get('/v1', function (req, res) {
    res.send('GET request to the homepage')
  })

  app.listen('/tab1', function (req, res) {
    res.send(require('./pages/Tab1'))
  })
  app.listen('/tab2', function (req, res) {
    res.send(require('./pages/Tab2'))
  })

  app.listen('/tab3', function (req, res) {
    res.send(require('./pages/Tab3'))
  })
