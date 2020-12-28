const mongoose = require('mongoose');
const realURL = "mongodb://<USERNAME>:<PASSWORD>@realm.mongodb.com:27020/?authMechanism=PLAIN&authSource=%24external&ssl=true&appName=web-application-0-udfes:<SERVICE_NAME>:local-userpass";
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("mongoose and poligonosApp connected!");
});
