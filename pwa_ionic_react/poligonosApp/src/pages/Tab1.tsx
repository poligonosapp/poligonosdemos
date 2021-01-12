import { accessToken } from '../utils/accessToken'

import { TileLayer, Marker, Popup } from 'react-leaflet'

import L, { circle, CRS } from 'leaflet'

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
import { Route } from "react-router-dom";

import _ from "underscore";
// import usePoligono from "../usePoligono";

const Tab1: React.FC = () => {

    const jwtToken = require('jsonwebtoken');

    let request = require('request');

    const pageInsightsUrl = process.env.pageInsightUrl;
    const endpoint = process.env.enpoint;

    'use strict'
    const $ = require('jquery');


    let options = {
        'method': 'GET',
        'url': endpoint,
        'headers': {
        }
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
    });

// Assign handlers immediately after making the request,
// and remember the jqxhr object for this request
    let jqxhr = $.ajax( options['url'], function() {
        alert( "success" );
    })
      .done(function() {
          alert( "second success" );
      })
      .fail(function() {
          alert( "error" );
      })
      .always(function() {
          alert( "finished" );
      });

// Perform other work here ...

// Set another completion function for the request above
    jqxhr.always(function() {
        alert( "second finished" );
    });

    // const [setMyMap] = useState({mymap});
    // const [setAccessToken] = useState({accessToken});

console.log('Carregando Lista de polígonos...');

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




            </IonContent>
        </IonPage>
    )
}

export default Tab1
