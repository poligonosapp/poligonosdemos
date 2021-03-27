const semver = require('semver');

server.valid('1.8.4');

let mongoose    = require('mongoose');
let express = require('express');
let app = express();

require('./pwa_ionic_react_poligonosapp/src/models/admin');
require('./packages/pwa_ionic_react_poligonosapp/src/models/poligono');
let response = require('./response');
require('@ionic/cli');
require('@poligonosdemos/poligonosapp-ionic');
require('@poligonosdemos/pwa_ionic_react_poligonosapp');
// require('.\\packages\\pwa_ionic_react_poligonosapp\\src\\index.tsx');
// require('nodemon');

// const index;

module.exports = {};