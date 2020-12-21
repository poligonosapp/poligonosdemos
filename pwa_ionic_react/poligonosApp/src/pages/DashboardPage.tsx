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
  IonItem
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import {UsersListPage} from "./UsersListPage";
import {UsersDetailPage} from "./UsersDetailPage";

export {UsersListPage, UsersDetailPage};

const DashboardPage: React.FC = () => {
  return (
    <IonRouterOutlet>
      <Route exact path="/dashboard" component={UsersListPage} />
  <Route path="/dashboard/users/:id" component={UsersDetailPage} />
  </IonRouterOutlet>
);
};

export default DashboardPage;
