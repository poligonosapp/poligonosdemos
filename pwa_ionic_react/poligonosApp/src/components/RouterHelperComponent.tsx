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
  IonButton
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { MyMapComponent } from "./hooks/HookUseMapEvent";
import { Link } from '@material-ui/core';

//export type Link;

const RouterHelperComponent: React.FC = (props) => (

  <Link to="/dashboard/users/1">
    User 1

    <IonButton
      onClick={e => {
        e.preventDefault();
        history.push('/dashboard/users/1');
      }}>
      Go to User 1
    </IonButton>

  </Link>



);

export default RouterHelperComponent;
