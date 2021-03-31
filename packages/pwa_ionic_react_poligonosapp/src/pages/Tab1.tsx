// import 'Tab1.css';

import React, {
    FC,
    useState,
    useEffect,
    useReducer,
    FormEvent,
    useRef,
} from 'react';

// const SomeComponent = React.lazy(() => import('./SomeComponent'));

import { PolygonExample } from './PolygonExample';



let $ = require('jquery')(window);

import { ReactReduxContext } from 'react-redux';

// import Toggle from './controller/Toggle';
const Toggle = React.lazy(() => import('./Toggle'));

//const Toggle = require('./controller/Toggle');

import ErrorBoundary from './ErrorBoundary';

// import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import Toggle from './controller/EventHandlerController';
import LayerControlForm from './LayerControlDemo';

import 'leaflet/dist/leaflet.css';
// import 'leaflet-draw/dist/leaflet.draw.css';
// import DrawComponent from './DrawComponent';

const DrawComponent = require('./DrawComponent');

// require('react-redux');

// require('./MyComponent');

// import { YourComponent, FirstStory } from './stories/SetupStoryBook.stories';

import { ApolloProvider } from '@apollo/client';

import { GeoJSON, Polygon, TileLayer, Pane, Popup, Marker } from "react-leaflet";

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



import {
    IonSpinner,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonInput,
    IonButton,
} from '@ionic/react';

// import ExploreContainer from '../components/ExploreContainer'

import './Tab1.css';
import { functionExpression } from '@babel/types';
import ReactControlExample from './ReactControlExample';
// import { mapFetchFunction } from './oneGeoJSON';
// import Login from "../components/Login";
// import { Route } from 'react-router-dom'

// import _ from 'underscore';
// import usePoligono from "../usePoligono";

let mockResponse = './src/polygon.geojson';
// let fetchResponse = './src/polygon.geojson';

// let mymap = require('./controller/tokenLeaflet.ts');
export let mymap = L.map('mapid').setView([51.505, -0.09], 13);//mock
//let f = require('./controller/tokenLeaflet.ts');


const position = [51.505, -0.09];

let mapData  = L.map('mapid').setView([51.505, -0.09], 13);//mock

if (mapData != null) {
    

try {
  mapData = require('./src/databases/realmweb/realmweb.ts');
} catch (e) {
    $.alert('database connection failed');
    // $.button('OK');
}

} else {
    // mapData = mymap;

$.alert('mock failed');

}



const Tab1: React.FC = () => {

    const position = [51.505, -0.09];

    // fast mock
    const [state, setState] = useState(mymap);
    // db
    let [allData, setAllData] = useState(mapData);

    let [isToggleOn, setToggleOn] = useState(true);

    //storybook
    // const jwtToken = require('jsonwebtoken');
    // let request = require('request');
    // const pageInsightsUrl = process.env.pageInsightUrl;
    // const endpoint = process.env.endpoint;

return (

        <ReactReduxContext.Consumer>
            {
                ({ store: [] }) => {



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

                
<ErrorBoundary>
            
                    <IonButton onClick={() => setToggleOn(true)} >
                        {Toggle}
            </IonButton>
            
                    <IonButton onClick={() => setAllData(mymap)} >
                        {Toggle}
            </IonButton>
            
                    <IonButton onClick={() => setAllData(mapData)} >
                        {Toggle}
            </IonButton>

            </ErrorBoundary >
                
                

                

                

                
                <ErrorBoundary>
                    <Pane style={{ xIndex: 180 }}>
                    <PolygonExample/>    
                    </Pane>
                </ErrorBoundary>
                <ErrorBoundary>
                    <Pane style={{ yIndex: 180 }}>
                    <PolygonExample/>    
                    </Pane>

</ErrorBoundary>
                <ErrorBoundary>

                    <Pane style={{ zIndex: 180 }}>
                    <PolygonExample/>    
                    </Pane>

                    </ErrorBoundary>
                <ErrorBoundary>
                    <PolygonExample/>
                </ErrorBoundary>

                <DrawComponent/>

                

                        

                <Pane name="custom" style={{ zIndex: 100 }}>

                    <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>

                    <Marker position={position}>
                        <Polygon positions={position} atribution="process.env.ATRIBUTION" URL="process.env.URL">
                            <GeoJSON atribution="process.env.ATRIBUTION" data={setState(mockResponse)}/>
                        </Polygon>
                        <Popup>
                            Polygon 1
                        </Popup>
                    </Marker>


                    </Pane>
  
<Pane name="custom" style={{ zIndex: 100 }}>

    <Marker position={position}>
        <Polygon positions={position} atribution="process.env.ATRIBUTION" URL="process.env.URL">
            <GeoJSON atribution="process.env.ATRIBUTION" data={this.state.mymap}/>
        </Polygon>
        <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
    </Marker>
                    

                


                </Pane>


                
                

                

                <ApolloProvider client={client}>
      <div>
        <h2> Polígonos App 🚀</h2>
                        <Pane name="custom" style={{ zIndex: 100 }}>
                            
                            <Polygon positions={position} atribution={process.env.ATRIBUTION} URL={process.env.URL}>
                        <GeoJSON atribution={process.env.ATRIBUTION} data={this.state.allData}/>
                    </Polygon>
                
                </Pane>
                    </div>
                    <div>
        <h2> Polígonos App 🚀</h2>
                        <Pane name="custom" style={{ zIndex: 100 }}>
                            
                            
                                <GeoJSON atribution={process.env.ATRIBUTION} data={this.state.allData}>
                                    <Polygon positions={position} atribution={process.env.ATRIBUTION} URL={process.env.URL}>
                                </Polygon>
                        </GeoJSON>
                    
                
                </Pane>
</div>
    </ApolloProvider>

       
                    
      

                
                
            </IonContent>
        </IonPage>

                }
            }
        </ReactReduxContext.Consumer>
        // ReactDOM.render(<LayerControlForm>{map}</LayerControlForm>,
        //,
  //document.getElementById('root')

    );

}//fim Tab1 function

<ErrorBoundary>
    ReactDOM.render(<Tab1 />,,document.getElementById('root'));
    </ErrorBoundary>



export default Tab1;

