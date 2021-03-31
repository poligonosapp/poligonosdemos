// require('uuid/v4');

// import { v4 as uuidv4 } from 'uuid';
// uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

 const { v4: uuidv4 } = require('uuid');
 uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

const semver = require('semver');

semver.valid('1.8.4');

export let mymap = L.map('mapid').setView([51.505, -0.09], 13);//mock

import Toggle from '../src/controller/Toggle';

import DrawComponent from '../src/pages/DrawComponent';

// import { ReactReduxContext } from 'react-redux';

require('react-redux');

import React, {Component, useState } from 'react';
import renderer from 'react-test-renderer';
import App from '../src/App';
import Tab1 from '../src/pages/Tab1';
// import App from '../App';

import { MockedProvider } from "@apollo/client/testing";

 // import {YourComponent, FirstStory} from './src/stories/SetupStoryBook';

// import results from '../.jest-test-result.json';

  import { loader } from 'graphql.macro';

  const query = loader('./polygon.graphql');

const query2 = loader('./poligono-geojson.graphql.ts');// mock

import PropTypes from 'prop-types'; // ES6
// var PropTypes = require('prop-types'); // ES5 with npm
// import {Polygon} from 'leaflet-draw'; // eslint-disable-line
// import {L.Draw.Polygon} from "react-leaflet-draw";

/**polygon.graphql[error] polygon.graphql: SyntaxError: Syntax Error: Unexpected Name "const". (1:1)
[error] > 1 | const POLYGONS = gql 'getAllPolygons() {
[error]     | ^
[error]   2 |     polygons: {
[error]   3 |         type Feature
[error]   4 |     geometry{
 */
it('should not gql', () => {

// geojson gql response

    fail(true);
 }
    
);

// [react-scripts] Module not found: Can't resolve './controller/Toggle'
// in '/home/luism/poligonosdemos/packages/pwa_ionic_react_poligonosapp/src/pages'
//[react-scripts] Proxy error: Could not proxy request /src/index.tsx 
// from localhost: 8100 to https://www.poligonosapp.herokuapp.com:8080.
  
it('should listen touch Toggle with multiple proxy request addresses ETIMEDOUT', () => {
  const div = document.createElement('div');
  // @ts-ignore
  ReactDOM.render(<Toggle  isToggleOn={true} mymap={mymap}/>, div);
  ReactDOM.unmountComponentAtNode(div);
  fail(true);
});



  it('should react-leaflet-draw', () => {
   //const div = document.createElement('div');
   //ReactDOM.render(<DrawComponent />, div);
   //ReactDOM.unmountComponentAtNode(div);
    require('nodejs');
   require('yarn');
   const poligonoDraw = new L.Draw.Polygon();
   poligonoDraw().initialize();
   poligonoDraw().addHooks();
   fail(true);
});

it('should @types/leaflet-draw', () => {
   const div = document.createElement('div');
   ReactDOM.render(<DrawComponent />, div);
   ReactDOM.unmountComponentAtNode(div);
});

it('should jest preset string not array', () => {
  // const div = document.createElement('div');
  // ReactDOM.render(<App />, div);
  // ReactDOM.unmountComponentAtNode(div);
});

it('should controller/frontend.ts typescript 7006', () => {
  // const div = document.createElement('div');
  // ReactDOM.render(<App />, div);
  // ReactDOM.unmountComponentAtNode(div);
});


it('should See https://nodejs.org/api/errors.html#errors_common_system_errors ' +
  'for more information (ENOTFOUND).', () => {
  // const div = document.createElement('div');
  // ReactDOM.render(<App />, div);
  // ReactDOM.unmountComponentAtNode(div);
  fail(true);
});
// should use Tab1 redux to ts2305 react-leaflet no providers
it('should ionic testing renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

  test(' should react suspense experimental redux http response', () => {
      const dataFetchReducer = (state:Component , action:Component ) => {
  // switch (action.type) {
        //     case 'FETCH_INIT':
        //       return {
        //         ...state,
        //         isLoading: true,
        //         isError: false
        //       };
        //     case 'FETCH_SUCCESS':
        //       return {
        //         ...state,
        //         isLoading: false,
        //         isError: false,
        //         data: action.payload,
        //       };
        //     case 'FETCH_FAILURE':
        //       return {
        //         ...state,
        //         isLoading: false,
        //         isError: true,
        //       };
        //     default:
        //       throw new Error();
        //   }
};
fail(true);
  });

test('should oneGeoJSON JSX.IntrinsicElements typescript 7026', () => {
    fail(true);
});

  test('should gtagjs firebase analytics', () => {
    fail(true);
});

test('should include javascript but not json', () => {
    let theregex = "./packages/pwa_ionic_react_poligonosapp/src/**/*.j[%s]";
    fail(true);
});



test('should delete storybook', () => {
    fail(true);
});

test('should not storybook FirstStory', () => {
    //    const { baseElement } = render(<SetupStoryBook />);
    
    // const { baseElement } = render(<FirstStory />);
    // expect(baseElement).toBeDefined();
    fail(true);
});

test('should not storybook', () => {
    //    const { baseElement } = render(<SetupStoryBook />);
    // const { baseElement } = render(<YourComponent />);

    // expect(baseElement).toBeDefined();
    fail(true);
});

const mocks = [
    {
        request: {
            query: query,
            variables: { index: 0 }
        },
        result: {
            data: {
                "type": "Polygon",
                "coordinates": [
                    [
                        [-109, 41],
                        [-102, 41],
                        [-102, 37],
                        [-109, 37],
                        [-109, 41]
                    ]
                ]
            }

        
      
        }
    },
    {
        request: {
            query: query2,
            variables: { index: 1 }
        },
        error: new Error("Something went wrong")
    }
];


it('jest expo works', () => {
  expect(1).toBe(1);
});

describe('should not jest expo <App /> typescript 2339', () => {
  it('has 1 child', () => {
    // const tree = renderer.create(<App />).toJSON();
    // expect(tree.children.length).toBe(1);//typescript 2339
    fail(true);
  });
});

// import { response } from 'express';

//const React = require('react');
const render = require('@testing-library/react');
import TestRenderer from 'react-test-renderer'; // ES6
import ReactDOM from 'react-dom';
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
  
  function SubComponent(foo:string) {
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
    //expect(baseElement).toBeDefined();
    fail(true);
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

test('should query insert moongoose', () => {
    const connectionTest = require('./databases/getting-started.ts');
    const poligonoDesenhoTest = require('./models/PoligonoModels');

    connectionTest.db.once('insert', function () {
        console.log('new polygon inserted!')
    })

    // const { baseElement } = render(<App />)
    // expect(baseElement).toBeDefined();
    fail(true)
})

test('should query read moongoose', () => {
    // const { baseElement } = render(<App />)
    // expect(baseElement).toBeDefined();
    fail(true)
})

test('should declare newModel mongoose', () => {
    // const { baseElement } = render(<App />)
    // expect(baseElement).toBeDefined();
    fail(true)
})

test('should declare newDesenhoSchema mongoose', () => {
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

const realmID = process.env.REALM_WEB_ID;
const atlasConnect = process.env.CONNECT;

test('should connect realm', () => {
    // const { baseElement } = render(<App />)
    // expect(baseElement).toBeDefined();

    const MongoClient = require('mongodb').MongoClient
    const uri = process.env.CONNECT;

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
