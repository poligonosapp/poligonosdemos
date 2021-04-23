
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// import * as React from 'react';
// import ReactDOM from 'react-dom';
// import ReactDOM, { render } from 'react-dom';
// import App from './App';
// import * as serviceWorker from 'serviceworker';
import { defineCustomElements } from '@ionic/pwa-elements/loader';

defineCustomElements(window);

// ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


// const R = require('ramda');
import * as R from 'ramda';
 
const { identity } = R;
R.map(identity, [1, 2, 3]);

import ErrorBoundary from './pages/ErrorBoundary';

// import { defineCustomElements } from '@ionic/pwa-elements/loader';

// Call the element loader after the platform has been bootstrapped
// defineCustomElements(window);

let csurf = require('csurf');

// import { v4 as uuidv4 } from 'uuid';
// uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
// ... or using CommonJS syntax:

// const { v4: uuidv4 } = require('uuid');
// uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

let $ = require('jquery')(window);

import semver from 'semver';
import uuid from 'uuid';

semver.valid('1.8.4');

// import React from 'react';

// import EditControlExample from './pages/edit-control';

import { GeoJSON, Polygon, TileLayer, Pane, Popup, Marker } from "react-leaflet";

let geojson = require('./polygons.geojson');

function onChange(geojson: typeof GeoJSON) {
  // geojson = JSON.parse(geojson);
  // console.log('geojson changed', geojson);
  $.alert('data processing finished');
  return geojson;
}

// render(example, document.getElementById('app'));

import 'core-js/es/map';
import 'core-js/es/set';
import 'raf/polyfill';
// import Toggle from './controller/EventHandlerController';

// require('./server.ts');
// require('./routes.ts');
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'GRAPHQL_REALM_ENDPOINT',
  cache: new InMemoryCache()
});

import { gql } from '@apollo/client';

// import from './controller/frontend';
import L, { map } from "leaflet";

let mymap = L.map('#root').setView([51.505, -0.09], 13);

try {

document.querySelector("#root").addEventListener("click", (event) => {});
  document.querySelector("#map").addEventListener("click", (event) => { });
  document.querySelector("#mapid").addEventListener("click", (event) => {});
document.querySelector("#app").addEventListener("click", (event) => {});

  let $ = require('jquery')( window );

 return $(document).ready( 
  
        function () {
            // $("#root").css-FUNnnQD3("color", "blue");
            $("#root").html(
                L.tileLayer(
        'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
        {
            attribution:
                'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: process.env.LEAFLET_TOKEN,
        }
    ).addTo(mymap)
            );
        }
    );
} catch (e) {
  console.log('openstreetmap.org is not responding');

import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
//import App from './App';

import { Elements } from '@stripe/react-stripe-js';

import { loadStripe } from '@stripe/react-stripe-js';
// await module esnext system
// await target es2017
// const { publishKey } = fetch('./config/config').then(r => r.json());

const stripePromise = loadStripe(process.env.STRIPE_GLOBAL);


(async () => {

// ReactDOM.render(<App />, document.getElementById('root'));
  // const rootElement = <div id="root"></div>; // https://pt-br.reactjs.org/docs/rendering-elements.html
  
const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<App />, rootElement);
} else {
  ReactDOM.render(<App />, rootElement);
}

  ReactDOM.render(
    <Auth0Provider
      domain="process.env.REACT_APP_AUTH0_DOMAIN"
      clientId="process.env.REACT_APP_AUTH0_CLIENT_ID"
      redirectUri={window.location.origin}
    >
      <React.StrictMode>
        <Elements stripe={stripePromise}>
          <App />
        </Elements>
      </React.StrictMode>
    </Auth0Provider>,
    document.getElementById('root')
  );




})();

}// catch end






