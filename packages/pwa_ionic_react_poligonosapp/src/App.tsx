const Stripe = require('stripe');
const stripe = Stripe(process.env.GLOBAL);

stripe.charges.retrieve(process.env.STRIPE_A, {
  api_key: process.env.STRIPE_B
});

const OtherComponent = React.lazy(() => import('./pages/oneGeoJSON'));

import React, { useState, useMemo, memo } from 'react';
import L from 'leaflet';

// require('firebase');
let firebase = require('firebase');
// import firebase from 'firebase';
let admin = require('firebase-admin');
// import * as admin from 'firebase-admin';// es 2015

import { ApolloProvider } from '@apollo/client';

// import SetupStoryBook from './stories/SetupStoryBook';

// import { mapFetchFunction } from './pages/oneGeoJSON';

import { PoligonoDesenho } from './models/poligono';

interface Props {
// any other props that come into the component, you don't have to explicitly define children.
  pd: PoligonoDesenho;
}

const Button: React.FC<Props> = ({ children, ...props }) => {

  let map = L.map('mapid').setView([51.505, -0.09], 13);

  // map.setView(pd);

  return (
    
    <Suspense fallback={<div>Loading...</div>}>
      
      <Button {...props}>
      {children}
<oneGeoJSON {...props}>
        {map}
      </oneGeoJSON>
    </Button>
      
      </Suspense>
      
      
  );
};
// import GeoJSON from 'leaflet';//response

let $ = require('jquery');


import { useAuth0 } from '@auth0/auth0-react';
// import { Profile } from './pages/Profile';
import { Redirect, Route } from 'react-router-dom';
import {
  IonSpinner,
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonButton
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './index.css';

// let admin = require('firebase-admin');
// import * as admin from 'firebase-admin';
// import * as url from "url";

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://poligonosapp-default-rtdb.firebaseio.com/'
});

let refreshToken;
let idToken = process.env.REACT_APP_AUTH0_CLIENT_ID;

firebase.auth().currentUser.getIdToken(true).then(function (idToken) {
  // Send token to your backend via HTTPS
  // ...

refreshToken = admin.initializeApp();// new token 

}).catch(function(error) {
  // Handle error
});

// "process.env.FIREBASE_REFRESH_TOKEN"=refreshToken; // Get refresh token from OAuth2 flow

admin.initializeApp({
  credential: admin.credential.refreshToken(refreshToken),
  databaseURL: 'https://poligonosapp-default-rtdb.firebaseio.com/'
});

// Initialize the default app
// var admin = require('firebase-admin');
let app = admin.initializeApp();

const defaultAppConfig = process.env.DEFAULT_CONFIG | null ;
const otherAppConfig = process.env.OTHER_APP_CONFIG | null;

// Initialize the default app
let defaultApp = admin.initializeApp(defaultAppConfig);

console.log(defaultApp.name);  // '[DEFAULT]'

// Retrieve services via the defaultApp variable...
let defaultAuth = defaultApp.auth();
let defaultDatabase = defaultApp.database();

// ... or use the equivalent shorthand notation
defaultAuth = admin.auth();
defaultDatabase = admin.database();

// Initialize the default app
admin.initializeApp(defaultAppConfig);

// Initialize another app with a different config
let otherApp = admin.initializeApp(otherAppConfig, 'other');

// console.log(admin.app().name);  // '[DEFAULT]'
// console.log(otherApp.name);     // 'other'

// Use the shorthand notation to retrieve the default app's services
defaultAuth = admin.auth();
defaultDatabase = admin.database();

// Use the otherApp variable to retrieve the other app's services
let otherAuth = otherApp.auth();
let otherDatabase = otherApp.database();


// var admin = require("firebase-admin");

let serviceAccount = require("./google-services.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://poligonosapp-default-rtdb.firebaseio.com"
});

//JQuery
let settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://luismendes070.auth0.com/oauth/token",
  "method": "POST",
  "headers": {
    "content-type": "application/json"
  },
  "data": require('./data.json')
};


// const App: React.FC = () => (
function App() {


let [response, setResponse] = useState(null);

  // await fetch('process.env.endpoint');

 // const [state, setState] = mapFetchFunction(mymap);

 // await $.ajax(settings).done( (response: JSON) => {
    // setResponse(response);
    // console.log(response);
  // });
//Node
let request = require("request");

let options = {
  method: 'POST',
  url: 'https://luismendes070.auth0.com/oauth/token',
  headers: { 'content-type': 'application/json' },
  body:
    '{"client_id":"process.env.CLIENT_ID","client_secret":"process.env.CLIENT_SECRET","audience": "process.env.AUDIENCE","grant_type": "client_credentials"}'
};

request(options, function (error, body) {
  if (error) throw new Error(error);

  console.log(body);
});

  let {
    isLoading,
    isAuthenticated,
    error,
    user,
    loginWithRedirect,
    logout,
  } = useAuth0();

// isAuthenticated = false;
// isLoading = true;

if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
}
  

if (isAuthenticated) {

    return (
      

      <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/tab1" component={Tab1} exact={true} />
          <Route path="/tab2" component={Tab2} exact={true} />
          <Route path="/tab3" component={Tab3} />
          <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={triangle} />
            <IonLabel>Tab 1</IonLabel>
            <IonSpinner />

           
            
            Hello {user.name}

        <IonButton onClick={() => logout({ returnTo: window.location.origin })}>
          Log out
        </IonButton>

                
                
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={ellipse} />
            <IonLabel>Tab 2</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={square} />
            <IonLabel>Tab 3</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
    );
  } else {
    return <IonButton onClick={() => loginWithRedirect}>Log in</IonButton>;
  }

  
// );
};

export default memo(App);
