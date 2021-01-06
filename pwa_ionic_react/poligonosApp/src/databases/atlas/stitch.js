

            const client = stitch.Stitch.initializeDefaultAppClient(
                'web-application-0-udfes'
            )

            const db = client
                .getServiceClient(
                    stitch.RemoteMongoClient.factory,
                    'mongodb-atlas'
                )
                .db('<DATABASE>')

            client.auth
                .loginWithCredential(new stitch.AnonymousCredential())
                .then((user) =>
                    db
                        .collection('<COLLECTION>')
                        .updateOne(
                            { owner_id: client.auth.user.id },
                            { $set: { number: 42 } },
                            { upsert: true }
                        )
                )
                .then(() =>
                    db
                        .collection('<COLLECTION>')
                        .find({ owner_id: client.auth.user.id }, { limit: 100 })
                        .asArray()
                )
                .then((docs) => {
                    console.log('Found docs', docs)
                    console.log('[MongoDB Realm] Connected to Realm')
                })
                .catch((err) => {
                    console.error(err)
                })
        