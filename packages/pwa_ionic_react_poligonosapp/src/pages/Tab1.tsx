// import { MapPlaceholder } from './MapPlaceholder';
// import 'Tab1.css';

import React, {
    FC,
    useState,
    useEffect,
    useReducer,
    FormEvent,
    useRef,
    Component
} from 'react';

// const SomeComponent = React.lazy(() => import('./SomeComponent'));

// import { PolygonExample } from './PolygonExample';



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
// import './css/main.css';
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
import { isElementOfType } from 'react-dom/test-utils';
import { getElement } from 'ionicons/dist/types/stencil-public-runtime';
// import { mapFetchFunction } from './oneGeoJSON';
// import Login from "../components/Login";
// import { Route } from 'react-router-dom'

// import _ from 'underscore';
// import usePoligono from "../usePoligono";
// import MapPlaceholder from './MapPlaceholder';

let mockResponse = './polygons.geojson';
// let fetchResponse = './src/polygon.geojson';

// let mymap = require('./controller/tokenLeaflet.ts');
// export let mymap = L.map('mapid').setView([51.505, -0.09], 13);//mock

// const mapboxUrl = process.env.LEAFLET_ACCESS_TOKEN;
const mapboxUrl = 'https://www.mapbox.com/about/maps/';

// initialize the map on the "map" div with a given center and zoom
// let map: L.Map;


  
  

const mapboxAttribution = '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>';// This assumes your map is the variable 'map'
// let credits = L.control.attribution().addTo(map);
// credits.addAttribution('© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>');;

let grayscale = L.tileLayer(mapboxUrl, {id: 'MapID', tileSize: 512, zoomOffset: -1, attribution: mapboxAttribution}),
    streets   = L.tileLayer(mapboxUrl, {id: 'MapID', tileSize: 512, zoomOffset: -1, attribution: mapboxAttribution});

let data = require('./polygons.geojson');


//let f = require('./controller/tokenLeaflet.ts');



// let isLoading = true;


const position = [51.505, -0.09];

// export let mapData  = L.map('mapid').setView([51.505, -0.09], 13);//mock
// let mymap = L.map('mapid').setView([51.505, -0.09], 13);//mock


let mymap = [
  [51.515, -0.09],
  [51.52, -0.1],
  [51.52, -0.12],
]
 // let mymap = L.map('map', {
//    center: [51.505, -0.09],
//  zoom: 13,
//  layers: [
//    L.tileLayer('https://www.mapbox.com/about/maps/', {id: 'MapID', tileSize: 512, zoomOffset: -1, attribution: mapboxAttribution}),
//    L.tileLayer('https://www.mapbox.com/about/maps/', {id: 'MapID', tileSize: 512, zoomOffset: -1, attribution: mapboxAttribution})
//  ]
// });

//mymap.off();
// mymap.remove();

let mapData = [
  [51.515, -0.09],
  [51.52, -0.1],
  [51.52, -0.12],
]



function GetElement() {
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

                    <Polygon pathOptions={{ color: 'purple' }} positions={
                         [
  [
    [51.51, -0.12],
    [51.51, -0.13],
    [51.53, -0.13],
  ],
  [
    [51.51, -0.05],
    [51.51, -0.07],
    [51.53, -0.07],
  ],
]
                    } />

                    
            
                    

            </ErrorBoundary >
                
                

                

                

            
                <DrawComponent/>

                

                        

                <Pane name="custom" style={{ zIndex: 100 }}>

                    <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>

                    <Marker position={position}>
                        
                        <Popup>
                            Polygon 1
                        </Popup>
                    </Marker>


                    </Pane>
  
<Pane name="custom" style={{ zIndex: 100 }}>

    <Marker position={position}>
        <Polygon positions={position} atribution="process.env.ATRIBUTION" URL="process.env.URL">
            <GeoJSON atribution="process.env.ATRIBUTION" data={mymap}/>
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
    );
}

let element = <ul>
    {
        this.state.isLoading
            ? <div>Loading polygons...</div>
            : getElement()
    }
</ul>;



class Tab1 extends React.Component {

   
    constructor(props: { isLoading:Boolean }) {
    super(props);
    // this.handleLoginClick = this.handleLoginClick.bind(this);
    // this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = { isLoading: true };
       //  this.myRef = React.createRef();
  }

    

    // let [isLoading] = useState(true);

    // let element = getElement();

    // isLoading = true;

    //storybook
    // const jwtToken = require('jsonwebtoken');
    // let request = require('request');
    // const pageInsightsUrl = process.env.pageInsightUrl;
    // const endpoint = process.env.endpoint;
// let isLoading = { this.state.isLoading };
    
return (

    

    element

    );

}//fim Tab1 function

// ReactDOM.render(
  // <MapPlaceholder />,
  // document.getElementById('root')
// );

// const center = [51.505, -0.09];

// ReactDOM.render(
 // <PolygonExample center={center} />,
 // document.getElementById('map')
// );

<ErrorBoundary>
    ReactDOM.render(<Tab1/>, document.getElementById('root'));
    </ErrorBoundary>

export default Tab1;



