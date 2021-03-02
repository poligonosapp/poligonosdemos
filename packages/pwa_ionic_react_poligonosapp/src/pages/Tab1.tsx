// import '././css/main.css';
// import { accessToken } from '../utils/accessToken';

const accessToken = require('process.env.LEAFLET_ACCESS_TOKEN');

import { TileLayer, Marker, Popup } from 'react-leaflet';

import L, { circle, CRS } from 'leaflet';

// import './src/components/Login';

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

// import ExploreContainer from '../components/ExploreContainer'

import './Tab1.css'
// import Login from "../components/Login";
import { Route } from 'react-router-dom'

import _ from 'underscore';
// import usePoligono from "../usePoligono";

let axiosResponse = require('./response');

// let mymap = require('./controller/LeafletFrontend.ts');

const Tab1: React.FC = () => {
    //db
    let [allData, setAllData] = useState(require('./src/databases/stitch.js'));
    //leaflet
    let [mymap, setMyMap] = useState(
        require('./controller/LeafletFrontend.ts');
    );

    setMyMap(axiosResponse);

    const jwtToken = require('jsonwebtoken');

    // let request = require('request');

    const pageInsightsUrl = process.env.pageInsightUrl;
    const endpoint = process.env.endpoint;

    // @ts-ignore
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

                {allData}
                {mymap}
            </IonContent>
        </IonPage>
    )
}

export default Tab1
