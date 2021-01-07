import { accessToken } from '../utils/accessToken'

import { TileLayer, Marker, Popup } from 'react-leaflet'

import L, { circle, CRS } from 'leaflet'

import React, {
    FC,
    useState,
    useEffect,
    useReducer,
    useCallback,
    FormEvent,
    useRef,
} from 'react'

import {
    IonSpinner,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonInput,
} from '@ionic/react'

import ExploreContainer from '../components/ExploreContainer'

import './Tab1.css'

const Tab1: React.FC = () => {
    // const [setMyMap] = useState({mymap});
    // const [setAccessToken] = useState({accessToken});

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Tab 1</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonSpinner />
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Tab 1</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <ExploreContainer name="Mapa" />
            </IonContent>
        </IonPage>
    )
}

export default Tab1
