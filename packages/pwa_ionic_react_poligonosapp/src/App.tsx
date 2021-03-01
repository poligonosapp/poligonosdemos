
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {Profile} from '/pages/Profile.tsx'
import { Redirect, Route } from 'react-router-dom';
import {
  IonSpinner,
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
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

// let admin = require('firebase-admin');
import * as admin from 'firebase-admin';

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://poligonosapp-default-rtdb.firebaseio.com/'
});

var refreshToken; // Get refresh token from OAuth2 flow

admin.initializeApp({
  credential: admin.credential.refreshToken(refreshToken),
  databaseURL: 'https://poligonosapp-default-rtdb.firebaseio.com/'
});

// Initialize the default app
// var admin = require('firebase-admin');
var app = admin.initializeApp();

// Initialize the default app
var defaultApp = admin.initializeApp(defaultAppConfig);

console.log(defaultApp.name);  // '[DEFAULT]'

// Retrieve services via the defaultApp variable...
var defaultAuth = defaultApp.auth();
var defaultDatabase = defaultApp.database();

// ... or use the equivalent shorthand notation
defaultAuth = admin.auth();
defaultDatabase = admin.database();

// Initialize the default app
admin.initializeApp(defaultAppConfig);

// Initialize another app with a different config
var otherApp = admin.initializeApp(otherAppConfig, 'other');

console.log(admin.app().name);  // '[DEFAULT]'
console.log(otherApp.name);     // 'other'

// Use the shorthand notation to retrieve the default app's services
var defaultAuth = admin.auth();
var defaultDatabase = admin.database();

// Use the otherApp variable to retrieve the other app's services
var otherAuth = otherApp.auth();
var otherDatabase = otherApp.database();


// var admin = require("firebase-admin");

var serviceAccount = require("google-services.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://poligonosapp-default-rtdb.firebaseio.com"
});

//JQuery
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://luismendes070.auth0.com/oauth/token",
  "method": "POST",
  "headers": {
    "content-type": "application/json"
  },
  "data": "{\"client_id\":\"O3ps6EDWQKoqJcTugLb9pvChzjwJMDC7\",\"client_secret\":\"UdqlSJ_EaYQY1_B_yYrutqTatUrO8Mt6hkaqiZVmgzN1yxt7LIFhA62BklSrrJmG\",\"audience\":\"https://poligonosapp.herokuapp.com/\",\"grant_type\":\"client_credentials\"}"
}

$.ajax(settings).done(function (response) {
  console.log(response);
});

//Node
var request = require("request");

var options = { method: 'POST',
  url: 'https://luismendes070.auth0.com/oauth/token',
  headers: { 'content-type': 'application/json' },
  body: '{"client_id":"O3ps6EDWQKoqJcTugLb9pvChzjwJMDC7",
  "client_secret":"UdqlSJ_EaYQY1_B_yYrutqTatUrO8Mt6hkaqiZVmgzN1yxt7LIFhA62BklSrrJmG","audience":"https://poligonosapp.herokuapp.com/","grant_type":"client_credentials"}' };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});


const {
    isLoading,
    isAuthenticated,
    error,
    user,
    loginWithRedirect,
    logout,
  } = useAuth0();

const App: React.FC = () => (

  



  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isAuthenticated) {
    return (
      <div>
<IonSpinner />
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


        Hello {user.name}{' '}
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          Log out
        </button>

<Profile/>

      </div>
    );
  } else {
    return <button onClick={loginWithRedirect}>Log in</button>;
  }

  
);

export default App;
