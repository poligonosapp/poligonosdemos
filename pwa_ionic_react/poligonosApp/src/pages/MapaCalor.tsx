import {  IonInput } from '@ionic/react';

import React, { Component } from 'react';
import { render } from "react-dom";
import {TileLayer, Marker, Popup} from "react-leaflet";
import {mockComponent} from "react-dom/test-utils";
import LeafLetHeatmapComponent from './LeafLetHeatmapComponent';

import type {Feature, Polygon} from 'geojson';

import 'leaflet/dist/leaflet.css';

import 'leaflet/dist/leaflet.js';

import L, {circle} from 'leaflet';

import CircularProgress from '@material-ui/core/CircularProgress';

// import * as dadosPoligono from '../polygon.geojson';

var poligonoVar: Polygon = {
  type : "Polygon",
  coordinates : [
     [ [ 0 , 0 ] , [ 3 , 6 ] , [ 6 , 1 ] , [ 0 , 0 ] ],
     [ [ 2 , 2 ] , [ 3 , 3 ] , [ 4 , 2 ] , [ 2 , 2 ] ]
  ]
}

 let polygonLet: Polygon = {
    type: "Polygon",
    coordinates: [
        [[100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0]]
    ]
};

export default // @ts-ignore
class MapaCalor extends React.Component implements IonInput{

    // let mymap;

	constructor(props:any){

		super(props);

		this.state = {
			count: 0,
			 tipo : props.tipo,
			 coordenadas :  props.coordenadas,
			 purpleOptions : props.color,
             mymap : props.mymap,
            accessToken : props.accessToken
		};
	}


// @ts-ignore
render(){
	return (
		<div>
		<CircularProgress />
		 <div id="mapid">{this.state.mymap}</div>



			<div>
				<p>You clicked {this.state.count} times</p>
				<button onClick={() => this.setState({ count: this.state.count + 1 })}>
					Click me
					<LeafLetHeatmapComponent />
				</button>
			</div>

		</div>
	);
}
}

