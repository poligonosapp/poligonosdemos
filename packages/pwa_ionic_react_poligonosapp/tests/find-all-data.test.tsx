const {MongoClient} = require('mongodb');

//const React = require('react');
const render = require('@testing-library/react');
import TestRenderer from 'react-test-renderer'; // ES6
import ReactDOM from 'react-dom';
// const TestRenderer = require('react-test-renders'); // ES5 com npm reactjs docs

const findDocuments = function (db, callback) {
    // Get the documents collection
    const collection = db.collection('documents')
    // Find some documents
    collection.find({}).toArray(function (err, docs) {
        assert.equal(err, null)
        console.log('Found the following records')
        console.log(docs)
        callback(docs)
    })
}
