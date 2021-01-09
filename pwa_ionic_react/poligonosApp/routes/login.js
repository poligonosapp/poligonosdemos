const jwtToken = require('jsowebtoken');

var request = require('request');

const pageInsightsUrl = process.env.pageInsightUrl;
const endpoint = process.env.enpoint;

'use strict'
const $ = require('jquery');
import _ from "underscore";

var options = {
  'method': 'GET',
  'url': [endpoint, pageInsightsUrl],
  'headers': {
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});

// Assign handlers immediately after making the request,
// and remember the jqxhr object for this request
var jqxhr = $.ajax( options['url'], function() {
  alert( "success" );
})
  .done(function() {
    alert( "second success" );
  })
  .fail(function() {
    alert( "error" );
  })
  .always(function() {
    alert( "finished" );
  });
 
// Perform other work here ...
 
// Set another completion function for the request above
jqxhr.always(function() {
  alert( "second finished" );
});

// default export {};
