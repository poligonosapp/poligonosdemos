const { MongoClient } = require('mongodb')

// Replace the following with your Atlas connection string
// const url = "mongodb+srv://<username>:<password>@clustername.mongodb.net/test?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";


const atlasConnect =
    'mongodb+srv://fail:c0nKakckwLdYTwCE@cluster0.neyhi.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority'

const client = new MongoClient(atlasConnect);

let grapqhlRealmEndpoint =
    'https://realm.mongodb.com/api/client/v2.0/app/realm-mobile-application-0-kqjzm/graphql';

async function run() {
    try {
        await client.connect()
        console.log('Connected correctly to Atlas server')
    } catch (err) {
        console.log(err.stack)
    } finally {
        await client.close()
    }
}

run().catch(console.dir)
