import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

//import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import { ExternalStateExample } from './ExternalStateExample';

// import { ErrorBoundary } from './ErrorBoundary';

function Tab1() {
  return (
    <IonPage>
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
        <ExploreContainer name="Tab 1 page" />

        
          <ExternalStateExample />
        

      </IonContent>
    </IonPage>
  );
}

export default Tab1;
