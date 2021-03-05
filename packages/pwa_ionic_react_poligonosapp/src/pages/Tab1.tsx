// import '././css/main.css';
// import { accessToken } from '../utils/accessToken';

// const accessToken = 'process.env.LEAFLET_ACCESS_TOKEN';

// import { TileLayer, Marker, Popup } from 'react-leaflet';

import L, { circle, CRS } from 'leaflet';

// import './src/components/Login';

import SetupStoryBook from './stories/SetupStoryBook';

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
// import { Route } from 'react-router-dom'

// import _ from 'underscore';
// import usePoligono from "../usePoligono";

let axiosResponse = require('./response');

// let mymap = require('./controller/LeafletFrontend.ts');
let mymap = L.map('mapid').setView([51.505, -0.09], 13);
//let f = require('./controller/LeafletFrontend.ts');

const Tab1: React.FC = () => {
    //db
    let [allData, setAllData] = useState(require('./src/databases/atlas/stitch.ts'));

    console.log(allData);

    const [state, setState] = useState(() => {

        const initialState = require('./controller/LeafletFrontend.ts').fun(mymap);

        return initialState;

    });

    //storybook
    <SetupStoryBook props={setState(axiosResponse)}/>

    // const jwtToken = require('jsonwebtoken');

    // let request = require('request');

    // const pageInsightsUrl = process.env.pageInsightUrl;
    // const endpoint = process.env.endpoint;

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
                {mymap}
            </IonContent>
        </IonPage>
    );
}

export default Tab1;
