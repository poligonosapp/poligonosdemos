const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

const dbMongooseConnection = mongoose.connection;
dbMongooseConnection.on('error', console.error.bind(console, 'connection error:'));
dbMongooseConnection.once('open', function () {
    console.log('mongoose and poligonosApp connected!');
})

export default dbMongooseConnection;
