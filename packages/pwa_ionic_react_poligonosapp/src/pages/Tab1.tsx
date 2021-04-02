// import { MapPlaceholder } from './MapPlaceholder';
// import 'Tab1.css';

import React, {
  FC,
  useState,
  useEffect,
  useReducer,
  FormEvent,
  useRef,
  Component, useCallback, Suspense
} from "react";

// const SomeComponent = React.lazy(() => import('./SomeComponent'));

// import { PolygonExample } from './PolygonExample';



let $ = require('jquery')(window);

import { ReactReduxContext } from 'react-redux';

// import Toggle from './controller/Toggle';
const Toggle = React.lazy(() => import('./Toggle'));

//const Toggle = require('./controller/Toggle');

import ErrorBoundary from './ErrorBoundary';

// import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

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
import { functionExpression, react } from "@babel/types";
import ReactControlExample from './ReactControlExample';
import { isElementOfType } from 'react-dom/test-utils';
// import { getElement } from 'ionicons/dist/types/stencil-public-runtime';
// import { mapFetchFunction } from './oneGeoJSON';
// import Login from "../components/Login";
// import { Route } from 'react-router-dom'

// import _ from 'underscore';
// import usePoligono from "../usePoligono";
// import MapPlaceholder from './MapPlaceholder';







class Tab1 extends React.Component {

   
    constructor(props: { isLoading:Boolean }) {
    super(props);
    // this.handleLoginClick = this.handleLoginClick.bind(this);
    // this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {
        isLoading: true,
        position: [51.505, -0.09],
        mymap: [
          [51.515, -0.09],
          [51.52, -0.1],
          [51.52, -0.12],
        ],
        mapData: [
          [51.515, -0.09],
          [51.52, -0.1],
          [51.52, -0.12],
        ]
      };
       
    } // end constructor
      
// @ts-ignore
  render(){
    return (

    
<div>
      <Suspense fallback={<div>Loading...</div>}>
        
  
            
          React.lazy(
          () => 


useCallback(
    () => {
      // {
        
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
  ]
]
                    } />

                    
            
                    

            </ErrorBoundary >
                
                

                

                

            
                <DrawComponent/>

                

                        

                
  



                
                

                

                <ApolloProvider client={client}>
      <div>
        <h2> Polígonos App 🚀</h2>
                        
                    </div>
                    <div>
        <h2> Polígonos App 🚀</h2>
                        
</div>
    </ApolloProvider>

       
                    
      

                
                
            </IonContent>
        </IonPage>

                }
            }
        </ReactReduxContext.Consumer>

       // }
    },
    ['react', 'react-dom', 'leaflet', 'react-leaflet']
  )

          )
           

           
      </Suspense>
    </div>
    
      
    )
  }; // end render

  
  


  
  // let memoizedCallback = ;



    

 } //fim Tab1 function



    export default Tab1;
    
    



