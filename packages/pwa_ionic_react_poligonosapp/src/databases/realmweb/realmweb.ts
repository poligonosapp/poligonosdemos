const $ = require('jquery')( window );// AUTH0 JQUERY

let server = require('./server.ts');
// let routes = require('./routes/index.tsx');
let connect = require('./connect.ts');
let allData = require('./find_all_data.ts');

import * as Realm from "realm-web";

const REALM_APP_ID = process.env.REALM_WEB_ID; // e.g. myapp-abcde
// @ts-ignore
const app: Realm.App = new Realm.App({ id: REALM_APP_ID });

let mymap;

try{
  mymap = require('./tokenLeaflet');
}catch (e) {
  $.alert('database is not authorized');
}

module.exports = mymap;
