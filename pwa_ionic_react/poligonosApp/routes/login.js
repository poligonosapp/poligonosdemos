const jwtToken = require('jsowebtoken');

var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://poligonosapp.herokuapp.com/login',
  'headers': {
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});

default export {};
