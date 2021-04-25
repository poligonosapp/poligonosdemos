// import OtherComponent from './OtherComponent';




import { Elements } from '@stripe/react-stripe-js';

// import { MapPlaceholder } from './MapPlaceholder';
// import 'Tab1.css-FUNnnQD3';

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
// import LayerControlForm from './LayerControlDemo';

import 'leaflet/dist/leaflet.css';
// import 'leaflet-draw/dist/leaflet.draw.css-FUNnnQD3';
// import DrawComponent from './DrawComponent';

const DrawComponent = require('./DrawComponent');

// require('react-redux');

// require('./MyComponent');

// import { YourComponent, FirstStory } from './stories/SetupStoryBook.stories';

import { ApolloProvider } from '@apollo/client';

import { GeoJSON, Polygon, TileLayer, Pane, Popup, Marker } from "react-leaflet";

// let mymapAux = require('./frontend');
// import { mapFetchFunction } from './oneGeoJSON';
// import './css-FUNnnQD3/main.css-FUNnnQD3';
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
// import ReactControlExample from './ReactControlExample';
import { isElementOfType } from 'react-dom/test-utils';
// import { getElement } from 'ionicons/dist/types/stencil-public-runtime';
// import { mapFetchFunction } from './oneGeoJSON';
// import Login from "../components/Login";
// import { Route } from 'react-router-dom'

// import _ from 'underscore';
// import usePoligono from "../usePoligono";
// import MapPlaceholder from './MapPlaceholder';

interface IProps { // ReadOnly types deleted
  // isLoading: Boolean | string | string[] | Boolean[] | [] | any,
  position: [],
  mymap: L.Map,
  mapData: L.Map
}

const OtherComponent = React.lazy(() => import('./OtherComponent'));

class Tab1 extends React.Component {

   
  constructor(props: IProps) {
      
    super(props);
    // this.handleLoginClick = this.handleLoginClick.bind(this);
    // this.handleLogoutClick = this.handleLogoutClick.bind(this);

      this.state = {
        // isLoading: props.isLoading,
        position: props.position,
        mymap: props.mymap,
        mapData: props.mapData
      };
       
    } // end constructor
      
  

  
// @ts-ignore
  render(){
    return (

    
<div>
      <Suspense fallback={<div>Loading...</div>}>
          <OtherComponent />
      </Suspense>
        
    </div>
    
      
    )
  }; // end render

  
  


  
  // let memoizedCallback = ;



    

 } //fim Tab1 function



    export default Tab1;
    
    



