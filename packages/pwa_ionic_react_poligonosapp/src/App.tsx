let $ = require('jQuery');

import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Profile } from './pages/Profile';
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
import * as admin from 'firebase-admin';

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://poligonosapp-default-rtdb.firebaseio.com/'
});

let refreshToken = "process.env.FIREBASE_REFRESH_TOKEN"; // Get refresh token from OAuth2 flow

admin.initializeApp({
  credential: admin.credential.refreshToken(refreshToken),
  databaseURL: 'https://poligonosapp-default-rtdb.firebaseio.com/'
});

// Initialize the default app
// var admin = require('firebase-admin');
let app = admin.initializeApp();

const defaultAppConfig = "process.env.DEFAULT_CONFIG";
const otherAppConfig = "process.env.DEFAULT_CONFIG";

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

console.log(admin.app().name);  // '[DEFAULT]'
console.log(otherApp.name);     // 'other'

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
  "data": "{\"client_id\":\"process.env.CLIENT_ID\",\"client_secret\":\"process.env.CLIENT_SECRET\",\"audience\":\"https://poligonosapp.herokuapp.com/\",\"grant_type\":\"client_credentials\"}"
};


// const App: React.FC = () => (
function App() {


let [response, setResponse] = useState('process.env.endpoint');

  

$.ajax(settings).done(function (response) {
  console.log(response);
});
//Node
let request = require("request");

let options = {
  method: 'POST',
  url: 'https://luismendes070.auth0.com/oauth/token',
  headers: { 'content-type': 'application/json' },
  body:
    '{"client_id":"process.env.CLIENT_ID","client_secret":"process.env.CLIENT_SECRET","audience": "https://poligonosapp.herokuapp.com/","grant_type": "client_credentials"}'
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
            Hello {user.name}{' '}
        <IonButton onClick={() => logout({ returnTo: window.location.origin })}>
          Log out
        </IonButton>

                <Profile props={user}/>
                
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

export default App;
