let server = require('./server.ts');
// let routes = require('./routes/index.tsx');
let connect = require('./connect.ts');
let allData = require('./find_all_data.ts');

import * as Realm from "realm-web";

const REALM_APP_ID = "process.env.REALM_WEB_ID"; // e.g. myapp-abcde
const app: Realm.App = new Realm.App({ id: REALM_APP_ID });



module.exports = {};
