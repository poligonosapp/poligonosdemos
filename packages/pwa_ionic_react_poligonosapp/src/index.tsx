require('./server.ts');
require('./routes.ts');
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'GRAPHQL_REALM_ENDPOINT',
  cache: new InMemoryCache()
});

import { gql } from '@apollo/client';

// const client = ...

client
  .query({
    query: gql`
      query GetRates {
        rates(currency: "USD") {
          currency
        }
      }
    `
  })
  .then(result => console.log(result));



import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

import {Elements} from '@stripe/react-stripe-js'

import { loadStripe } from '@stripe/react-stripe-js';

const { publishKey } = await fetch('/config').then(r => r.json());

const stripePromise = loadStripe(publishKey);


(async () => {

// ReactDOM.render(<App />, document.getElementById('root'));
const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(App, rootElement);
} else {
  // ReactDOM.render(App, rootElement);

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

}

})();




