import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

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
      <App />
    </Auth0Provider>,
    document.getElementById('root')
  );

}

