import { response } from 'express'

const React = require('react')
const render = require('@testing-library/react')
import App from '../src/App'
// import Tab1 from "./pages/Tab1";
// import ExampleWithManyStates from "./components/ExampleWithManyStates";
// import FeatureGeoJSONMapaCalor from "./pages/FeatureGeoJSONMapaCalor";
// const {accessToken} = 'pk.eyJ1IjoibHVpc21lbmRlczA3MCIsImEiOiJja2Y1cHp2dzcwZzV3MnpueGIwMThtZHo0In0.scLMoUkXBo03JD4ir3UGYA'.toString();
// const store = mockStore(initialState);

const makeServiceWorkerEnv = require('service-worker-mock')
const makeFetchMock = require('service-worker-mock/fetch')

// babel loader
require('@babel/core').transform('code', {
    plugins: ['@babel/plugin-transform-modules-amd'],
})

require('@babel/core').transform('code', {
    plugins: ['@babel/plugin-transform-modules-commonjs'],
})

require('@babel/core').transform('code', {
    plugins: ['@babel/plugin-transform-modules-systemjs'],
})

require('@babel/core').transform('code', {
    plugins: ['@babel/plugin-transform-modules-umd'],
})

require('babel-plugin-relay').transform('code', {
    plugins: ['babel-plugin-relay'],
})

require('graphql').transform('code', {
    plugins: ['graphql'],
})

require('core-js/es6/map')
require('core-js/es6/set')
require('core-js/es6/promise')
require('core-js/es6/object')

require('./myRelayApplication')

require('./react-leafet')

const geojson = require('./geojson') //api

require('./ExampleWithManyStates')

const accessToken = require('./accessToken')

require('whatwg-fetch')

const fs = require('fs')

require('sass-loader')

require('@types/convert-string')

const express = require('express')
const logger = require('morgan')
const app = express()
app.use(logger('dev'))

const graphql = require('babel-plugin-relay/macro')
// import {graphql, QueryRenderer} from 'react-relay';

// require('fs');

test('renders without crashing', () => {
    const { baseElement } = render(<App />)
    expect(baseElement).toBeDefined()
})

test('shapefile types upload', () => {
    // fail(true);
})

test('geojson types upload', () => {
    // fail(true);
})

test('should webpack loaders webkit dev tools FOUC flash of unstyled text', () => {})

test('webpack babel loaders post css', () => {
    // fail(true);
})

test('nodemom express', () => {
    // fail(true);
})

test('should useState', () => {
    const { baseElement } = render(<App />)
    // expect(baseElement).toBeDefined();
    fail(true)
})

test('should render props relay', () => {
    const { baseElement } = render(<App />)
    // expect(baseElement).toBeDefined();
    fail(true)
})

test('should accept stripe payments', () => {
    const { baseElement } = render(<App />)
    // expect(baseElement).toBeDefined();
    fail(true)
})

test('should query graphQl api', () => {
    const { baseElement } = render(<App />)

    // expect(baseElement).toBeDefined();
    fail(true)
})

test('should query insert moongose', () => {
    const connectionTest = require('./databases/getting-started.ts')
    const poligonoDesenhoTest = require('./models/PoligonoModels')

    connectionTest.db.once('insert', function () {
        console.log('new polygon inserted!')
    })

    const { baseElement } = render(<App />)
    // expect(baseElement).toBeDefined();
    fail(true)
})

test('should query read moongose', () => {
    const { baseElement } = render(<App />)
    // expect(baseElement).toBeDefined();
    fail(true)
})

test('should declare newModel moongose', () => {
    const { baseElement } = render(<App />)
    // expect(baseElement).toBeDefined();
    fail(true)
})

test('should declare newDesenhoSchema moongose', () => {
    const { baseElement } = render(<App />)
    // expect(baseElement).toBeDefined();
    fail(true)
})

test('should send http 200 status code', () => {
    const { baseElement } = render(<App />)
    // expect(baseElement).toBeDefined();

    const resStatus = response.status(200)

    console.assert(resStatus, require('response'))

    fail(true)
})

const realmID = 'web-application-0-udfes'
const atlasConnect =
    'mongodb+srv://fail:<password>@cluster0.neyhi.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority'

test('should connect realm', () => {
    const { baseElement } = render(<App />)
    // expect(baseElement).toBeDefined();

    const MongoClient = require('mongodb').MongoClient
    const uri =
        'mongodb+srv://fail:<password>@cluster0.neyhi.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority'
    const client = new MongoClient(uri, { useNewUrlParser: true })
    client.connect((err) => {
        const collection = client.db('test').collection('devices')
        // perform actions on the collection object
        client.close()
    })

    fail(true)
})

export {}
