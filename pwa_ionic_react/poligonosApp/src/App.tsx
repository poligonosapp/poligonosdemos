// import {graphql, QueryRenderer} from 'react-relay';

import './theme/style.scss'

import React, { useState, FormEvent, useCallback } from "react";
import { Router, Redirect, Route } from 'react-router-dom'
import {
    IonApp,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { ellipse, square, triangle } from 'ionicons/icons'
import Tab1 from './pages/Tab1'
import Tab2 from './pages/Tab2'
import Tab3 from './pages/Tab3'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

import { useAuth0 } from "@auth0/auth0-react";

const App: React.FC = () => {

    const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

    return (
        <IonApp>
            <IonReactRouter>
                <IonTabs>
                    <IonRouterOutlet >

                        <Router history={history}>
                        <Route path="/tab1" component={Tab1} exact={true} />
                        <Route path="/tab2" component={Tab2} exact={true} />
                        <Route path="/tab3" component={Tab3} />
                        </Router>


                        

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
    )
}

export default App
