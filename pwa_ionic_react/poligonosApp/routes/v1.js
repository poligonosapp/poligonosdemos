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
