const { MongoClient } = require('mongodb');

// Replace the following with your Atlas connection string
// const url = "mongodb+srv://<username>:<password>@clustername.mongodb.net/test?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";


const atlasConnect = process.env.CONNECT;

const client = new MongoClient(atlasConnect);

let grapqhlRealmEndpoint = process.env.GRAPHQL_ENDPOINT;

async function run() {
    try {
        await client.connect();
        console.log('Connected correctly to Atlas server');
    } catch (err) {
        console.log(err.stack);
    } finally {
        await client.close();
    }
}

run().catch(console.dir);
