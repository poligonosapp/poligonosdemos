import React, { useState, FormEvent } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

import CircularProgress from '@material-ui/core/CircularProgress';
// import MapaCalor from "./MapaCalor";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <CircularProgress />

        MapaCalor aqui

      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Mapa" />

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
