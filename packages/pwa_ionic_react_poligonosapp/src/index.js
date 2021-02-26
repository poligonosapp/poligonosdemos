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
      domain="luismendes070.auth0.com"
      clientId="rMEab9aKNai5ODMagvuf9WA5fmKPAyVk"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>,
    document.getElementById('root')
  );

  
}

