import React from 'react';
import renderer from 'react-test-renderer';
import App from '../src/App';
// import App from './App';

it('jest expo works', () => {
  expect(1).toBe(1);
});

describe('jest expo <App />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.children.length).toBe(1);
    fail(true);
  });
});

// import { response } from 'express';

const React = require('react');
const render = require('@testing-library/react');
import TestRenderer from 'react-test-renderer'; // ES6
// const TestRenderer = require('react-test-renders'); // ES5 com npm reactjs docs


// import Tab1 from "./pages/Tab1";
// import ExampleWithManyStates from "./components/ExampleWithManyStates";
// import FeatureGeoJSONMapaCalor from "./pages/FeatureGeoJSONMapaCalor";
// const {accessToken} = 'pk.eyJ1IjoibHVpc21lbmRlczA3MCIsImEiOiJja2Y1cHp2dzcwZzV3MnpueGIwMThtZHo0In0.scLMoUkXBo03JD4ir3UGYA'.toString();
// const store = mockStore(initialState);

const makeServiceWorkerEnv = require('service-worker-mock');
const makeFetchMock = require('service-worker-mock/fetch');

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

require('core-js/es6/map');
require('core-js/es6/set');
require('core-js/es6/promise');
require('core-js/es6/object');

require('./myRelayApplication');

require('./react-leafet');

const geojson = require('./polygon.geojson') //mock test open data example

require('./ExampleWithManyStates');

const accessToken = 'process.env.LEAFLET_ACCESS_TOKEN';

require('whatwg-fetch');

const fs = require('fs');

require('sass-loader');

require('@types/convert-string');

const express = require('express');
const logger = require('morgan');
const app = express();
app.use(logger('dev'));

const graphql = require('babel-plugin-relay/macro');
// import {graphql, QueryRenderer} from 'react-relay';

// require('fs');

function Link(props) {
    return <a href={props.page}>{props.children}</a>;
  }

  const urlPostmanMockServer="https://bc5a0f59-083c-4dc9-bc79-ca91a7136b96.mock.pstmn.io";
  
  const testRendererLocalhost = TestRenderer.create(
    <Link page="https://www.localhost:3000/">PoligonosApp</Link>
  );

  const testRendererProd = TestRenderer.create(
    
    <Link page="https://poligonosapp.herokuapp.com/">PoligonosApp</Link>
    
);
  
const testRendererMock = TestRenderer.create(
    <Link page="https://bc5a0f59-083c-4dc9-bc79-ca91a7136b96.mock.pstmn.io">Mock Server</Link>
);
  
const vetor = [testRendererLocalhost, testRendererProd, testRendererMock];

console.log(vetor[0].toJSON());
console.log(vetor[1].toJSON());
console.log(vetor[2].toJSON());

  console.log(testRendererLocalhost.toJSON());

function MyComponent() {
    return (
      <div>
        <SubComponent foo="bar" />
        <p className="my">Hello</p>
      </div>
    )
  }
  
  function SubComponent(foo) {
    return (
        <p className="sub">Sub {foo}</p>
    );
  }
  
  const testRenderer = TestRenderer.create(<MyComponent />);
  const testInstance = testRenderer.root;
  
  expect(testInstance.findByType(SubComponent).props.foo).toBe('bar');
  expect(testInstance.findByProps({className: "sub"}).children).toEqual(['Sub']);

test('should fetch get status code 200 OK', () => {

    // const { baseElement } = require('./routes/login');
    // expect(baseElement.options['url']).toBeDefined(200)

    fail(true)

})

test('renders without crashing', () => {
    // const { baseElement } = render(<App />);
    // L.Layer
    expect(baseElement).toBeDefined();
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
    // const { baseElement } = render(<App />)
    // expect(baseElement).toBeDefined();
    fail(true)
})

test('should render props relay', () => {
    // const { baseElement } = render(<App />)
    // expect(baseElement).toBeDefined();
    fail(true)
})

test('should accept stripe payments', () => {
    // const { baseElement } = render(<App />)
    // expect(baseElement).toBeDefined();
    fail(true)
})

test('should query graphQl api', () => {
    // const { baseElement } = render(<App />)

    // expect(baseElement).toBeDefined();
    fail(true)
})

test('should query insert moongose', () => {
    const connectionTest = require('./databases/getting-started.ts');
    const poligonoDesenhoTest = require('./models/PoligonoModels');

    connectionTest.db.once('insert', function () {
        console.log('new polygon inserted!')
    })

    // const { baseElement } = render(<App />)
    // expect(baseElement).toBeDefined();
    fail(true)
})

test('should query read moongose', () => {
    // const { baseElement } = render(<App />)
    // expect(baseElement).toBeDefined();
    fail(true)
})

test('should declare newModel moongose', () => {
    // const { baseElement } = render(<App />)
    // expect(baseElement).toBeDefined();
    fail(true)
})

test('should declare newDesenhoSchema moongose', () => {
    // const { baseElement } = render(<App />)
    // expect(baseElement).toBeDefined();
    fail(true)
})

test('should send http 200 status code', () => {
    // const { baseElement } = render(<App />)
    // expect(baseElement).toBeDefined();

    // const resStatus = response.status(200)

    // console.assert(resStatus, require('response'))

    fail(true);
})

const realmID = 'web-application-0-udfes'
const atlasConnect =
    'mongodb+srv://fail:process.env.PASSWORD@cluster0.neyhi.gcp.mongodb.net/process.env.DB_NAME?retryWrites=true&w=majority'

test('should connect realm', () => {
    // const { baseElement } = render(<App />)
    // expect(baseElement).toBeDefined();

    const MongoClient = require('mongodb').MongoClient
    const uri =
        'mongodb+srv://fail:process.env.PASSWORD@cluster0.neyhi.gcp.mongodb.net/process.env.DB_NAME?retryWrites=true&w=majority'
    const client = new MongoClient(uri, { useNewUrlParser: true })
    client.connect((err) => {
        const collection = client.db('test').collection('devices')
        // perform actions on the collection object
        client.close()
    })

    fail(true);
});

test('ionic serve TypeError: Cannot read property tap of undefined', () => {

    require('tap');
    require('iconv');
    require('url');
    require('jest-expo');

    fail(true);
});

export {}
