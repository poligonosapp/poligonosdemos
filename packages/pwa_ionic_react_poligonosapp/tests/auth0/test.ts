let settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://luismendes070.auth0.com/oauth/token",
  "method": "POST",
  "headers": {
    "content-type": "application/json"
  },
  "data": "{\"client_id\":\"O3ps6EDWQKoqJcTugLb9pvChzjwJMDC7\",\"client_secret\":\"UdqlSJ_EaYQY1_B_yYrutqTatUrO8Mt6hkaqiZVmgzN1yxt7LIFhA62BklSrrJmG\",\"audience\":\"https://poligonosapp.herokuapp.com/\",\"grant_type\":\"client_credentials\"}"
}

$.ajax(settings).done(function (response) {
  console.log(response);
});

let request = require("request");

let options = { method: 'POST',
  url: 'https://luismendes070.auth0.com/oauth/token',
  headers: { 'content-type': 'application/json' },
  body: '{"client_id":"O3ps6EDWQKoqJcTugLb9pvChzjwJMDC7","client_secret":"UdqlSJ_EaYQY1_B_yYrutqTatUrO8Mt6hkaqiZVmgzN1yxt7LIFhA62BklSrrJmG","audience":"https://poligonosapp.herokuapp.com/","grant_type":"client_credentials"}' };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});