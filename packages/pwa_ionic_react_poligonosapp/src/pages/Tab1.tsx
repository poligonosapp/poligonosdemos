import { ReactReduxContext } from 'react-redux';

// require('./MyComponent');

// import { YourComponent, FirstStory } from './stories/SetupStoryBook.stories';

import { ApolloProvider } from '@apollo/client';

import { GeoJSON, Polygon, TileLayer, Pane } from 'react-leaflet';

// let mymapAux = require('./frontend');
// import { mapFetchFunction } from './oneGeoJSON';
// import '././css/main.css';
// import { accessToken } from '../utils/accessToken';

// const accessToken = 'process.env.LEAFLET_ACCESS_TOKEN';

// import { TileLayer, Marker, Popup } from 'react-leaflet';

import L, { circle, CRS } from 'leaflet';

// import './src/components/Login';

// let YourComponent  = require('./stories/YourComponent.tsx');
// let YourComponent  = require('./stories/SetupStoryBook.tsx');
// let SetupStoryBook  = require('./stories/SetupStoryBook.tsx');

interface Props {
// any other props that come into the component, you don't have to explicitly define children.
}

const Button: React.FC<Props> = ({ children, ...props }) => {
  return (
      <Button {...props}>{children}</Button>
  );
};

import React, {
    FC,
    useState,
    useEffect,
    useReducer,
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
import { functionExpression } from '@babel/types';
// import { mapFetchFunction } from './oneGeoJSON';
// import Login from "../components/Login";
// import { Route } from 'react-router-dom'

// import _ from 'underscore';
// import usePoligono from "../usePoligono";

let mockResponse = './src/polygon.geojson';
// let fetchResponse = './src/polygon.geojson';

// let mymap = require('./controller/LeafletFrontend.ts');
export let mymap = L.map('mapid').setView([51.505, -0.09], 13);
//let f = require('./controller/LeafletFrontend.ts');


const position = [51.505, -0.09];

let mapData = mymap;

try {
  mapData = require('./src/databases/realmweb/realmweb.ts');
} catch (e) {
    $.alert('database connection failed');
    // $.button('OK');
}

const Tab1: React.FC = () => {
    
    // fast mock
    const [state, setState] = useState(mymap);
    // db
    let [allData, setAllData] = useState(mapData);

    //storybook
    

    // const jwtToken = require('jsonwebtoken');

    // let request = require('request');

    // const pageInsightsUrl = process.env.pageInsightUrl;
    // const endpoint = process.env.endpoint;

    // @ts-ignore
    return (

        <ReactReduxContext.Consumer>
            {
                ({ store }) => {



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

                

                        

                <Pane name="custom" style={{ zIndex: 100 }}>

                    <Polygon positions={position} atribution="process.env.ATRIBUTION" URL="process.env.URL">
                        <GeoJSON atribution="process.env.ATRIBUTION" data={setState(mockResponse)}/>
                    </Polygon>

                    </Pane>
  
<Pane name="custom" style={{ zIndex: 100 }}>
                    
                    <Polygon positions={position} atribution="process.env.ATRIBUTION" URL="process.env.URL">
                        <GeoJSON atribution="process.env.ATRIBUTION" data={this.state.mymap}/>
                    </Polygon>
                


                </Pane>


                
                

                

                <ApolloProvider client={client}>
      <div>
        <h2> Polígonos App 🚀</h2>
                        <Pane name="custom" style={{ zIndex: 100 }}>
                            
                    <Polygon positions={position} atribution="process.env.ATRIBUTION" URL="process.env.URL">
                        <GeoJSON atribution="process.env.ATRIBUTION" data={this.state.allData}/>
                    </Polygon>
                
                </Pane>
</div>
    </ApolloProvider>

       
                    
      

                
                
            </IonContent>
        </IonPage>

                }
            }
</ReactReduxContext.Consumer>

    );
}

export default Tab1;

