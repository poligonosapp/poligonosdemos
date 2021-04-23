import React, { useCallback } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'
import App from './App'

// const R = require('ramda');

// require('core-js/es/map');
require('core-js/es/set')
require('raf/polyfill')

// require('./index.tsx');

try {


document.querySelector("#root").addEventListener("click", (event) => {});
    document.querySelector("#map").addEventListener("click", (event) => { });
    document.querySelector('#mapid').addEventListener('click', (event) => {})
document.querySelector("#app").addEventListener("click", (event) => {});

    // import { ApolloClient, InMemoryCache } from '@apollo/client';

    const client = new ApolloClient({
        uri: 'GRAPHQL_REALM_ENDPOINT',
        cache: new InMemoryCache(),
    })

    // import { gql } from '@apollo/client'

    // const client = ...

    /**
    client
        .query({
            query: gql`
                query GetRates {
                    rates(currency: "USD") {
                        currency
                    }
                }
            `,
        })
        .then((result) => console.log(result))
         */
} catch (e) {}

// ReactDOM.render(<App />, document.getElementById('root'));
const rootElement = <div id="root"></div> // https://pt-br.reactjs.org/docs/rendering-elements.html

try {
    if (rootElement.hasChildNodes()) {
        for (let entry of rootElement.hasChildNodes()) {
            useCallback(ReactDOM.hydrate(App, document.getElementById('root')))
        }
    } else {
        // ReactDOM.render(App, rootElement);

        ReactDOM.render(
            <Auth0Provider
                domain="process.env.REACT_APP_AUTH0_DOMAIN"
                clientId="process.env.REACT_APP_AUTH0_CLIENT_ID"
                redirectUri={window.location.origin}
            >
                <App />
            </Auth0Provider>,
            document.getElementById('root')
        )
    }
} catch (e) {}
