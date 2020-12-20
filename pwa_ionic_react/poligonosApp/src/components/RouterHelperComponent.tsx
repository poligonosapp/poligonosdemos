import React, { useState, FormEvent } from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  Link,
  IonButton
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

function RouterHelperComponent(props){
  return <div>
    <Link to="/dashboard/users/1">User 1</Link>

    <IonButton
      onClick={e => {
        e.preventDefault();
        history.push('/dashboard/users/1');
      }}>
      Go to User 1
    </IonButton>
    </div>;
}

export default RouterHelperComponent;
