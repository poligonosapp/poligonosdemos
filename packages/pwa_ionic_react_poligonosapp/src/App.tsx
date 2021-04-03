import ErrorBoundary from "./pages/ErrorBoundary";

require('./polygons.geojson');

// require('./pages/PoligonoComponentPage');
// import ButtonProps from './pages/ButtonProps';
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_GLOBAL);

// eslint-disable-next-line
// let stringID = stripe.charges.retrieve(process.env.STRIPE_A, {
  // api_key: process.env.STRIPE_B
// });

// const OtherComponent = React.lazy(() => import('./pages/oneGeoJSON'));

import React, { useState, useMemo, memo, Suspense } from 'react';
import L from 'leaflet';

// require('firebase');

// Firebase App (the core Firebase SDK) is always required and must be listed first
// import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
// import "firebase/analytics";

// Add the Firebase products that you want to use
// import "firebase/auth";

// require('firebase/auth');

// let firebase = require('firebase');
// import firebase from 'firebase';
// let admin = require('firebase-admin'); //backend
// import * as admin from 'firebase-admin';// es 2015

import { ApolloProvider } from '@apollo/client';

// import SetupStoryBook from './stories/SetupStoryBook';

// import { mapFetchFunction } from './pages/oneGeoJSON';


// import GeoJSON from 'leaflet';//response

let $ = require('jquery')( window );


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



let refreshToken = process.env.REACT_APP_AUTH0_CLIENT_ID;
let idToken = process.env.REACT_APP_AUTH0_CLIENT_ID;

// idToken = admin.initializeApp();



// "process.env.FIREBASE_REFRESH_TOKEN"=refreshToken; // Get refresh token from OAuth2 flow






// var admin = require("firebase-admin");



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
function App(): JSX.Element | { App: React.FC<{}>; } {


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

request(options, function (error: string | undefined, body: any) {
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
  
  const App: React.FC = () => (
    <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>

          <ErrorBoundary>
            <Route path="/tab1" component={Tab1} exact={true} />
          </ErrorBoundary>

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
  

if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
}
  

if (isAuthenticated) {

    return (
      {App}
    );
  } else {
    return <IonButton onClick={() => loginWithRedirect}>Log in</IonButton>;
  }

  
// );
};

export default memo({ App });

