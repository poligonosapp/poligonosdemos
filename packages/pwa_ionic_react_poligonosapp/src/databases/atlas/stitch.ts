let server = require('./server.ts');
let routes = require('./routes/index.tsx');
let connect = require('./connect.ts');
let allData = require('./find_all_data.ts');

const client = stitch.Stitch.initializeDefaultAppClient(
    'process.env.REALM_WEB_ID'
);

const db = client
    .getServiceClient(stitch.RemoteMongoClient.factory, 'mongodb-atlas')
    .db('shapefiles');

client.auth
    .loginWithCredential(new stitch.AnonymousCredential())
    .then((user) =>
        return db.collection('fail')
            .updateOne(
                { owner_id: client.auth.user.id },
                { $set: { number: 42 } },
                { upsert: true }
            )
    )
    .then(() =>
        return db.collection('fail')
            .find({ owner_id: client.auth.user.id }, { limit: 100 })
            .asArray();
    )
    .then((docs) => {
        console.log('Found docs', docs);
        console.log('[MongoDB Realm] Connected to Realm');
        return;
    })
    .catch((err) => {
        console.error(err);
        return;
    });

module.exports = {};
