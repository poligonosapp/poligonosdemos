let $ = require('jquery')(window);

let settings: { async: boolean; headers: { "content-type": string }; method: string; data: string; crossDomain: boolean; url: string };
settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://luismendes070.auth0.com/oauth/token",
  "method": "POST",
  "headers": {
    "content-type": "application/json"
  },
  "data": `{"client_id":process.env.AUTH0_CLIENT_ID,"client_secret":process.env.AUTH0_CLIENT_SECRET,"audience":process.env.REACT_AUDIENCE,"grant_type":"client_credentials"}`
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

let request = require("request");

let options = { method: 'POST',
  url: 'https://luismendes070.auth0.com/oauth/token',
  headers: { 'content-type': 'application/json' },
  body: '{"client_id":process.env.AUTH0_CLIENT_ID,"client_secret":process.env.AUTH0_CLIENT_SECRET,"audience":process.env.REACT_AUDIENCE,"grant_type":"client_credentials"}' };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});