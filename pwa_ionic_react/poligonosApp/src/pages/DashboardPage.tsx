import React, { useState, FormEvent } from "react";
import { Redirect, Route, RouteComponentProps } from "react-router-dom";
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

import {UsersListPage} from "./pages/UsersListPage";
import {UserDetailPage} from "./pages/UsersDetailPage";

export {UsersListPage, UserDetailPage};

const DashboardPage: React.FC<RouteComponentProps> = ({match}) => {
  return (
    <IonRouterOutlet>
      <Route exact path={match.url} component={UsersListPage} />
      <Route path={`${match.url}/users/:id`} component={UserDetailPage} />
    </IonRouterOutlet>
  );
};

export default DashboardPage;
