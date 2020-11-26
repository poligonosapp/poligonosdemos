import React, { Component } from 'react';
import { render } from "react-dom";
import {TileLayer, Marker, Popup} from "react-leaflet";
import {mockComponent} from "react-dom/test-utils";
import LeafLetHeatmapComponent from './LeafLetHeatmapComponent';

import type {Feature, Polygon} from 'geojson';

import 'leaflet/dist/leaflet.css';

import 'leaflet/dist/leaflet.js';

import L from 'leaflet';

// import * as dadosPoligono from '../polygon.geojson';

var poligono: Polygon = {
  type : "Polygon",
  coordinates : [
     [ [ 0 , 0 ] , [ 3 , 6 ] , [ 6 , 1 ] , [ 0 , 0 ] ],
     [ [ 2 , 2 ] , [ 3 , 3 ] , [ 4 , 2 ] , [ 2 , 2 ] ]
  ]
}

 let polygon: Polygon = {
    type: "Polygon",
    coordinates: [
        [[100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0]]
    ]
};

export default class MapaCalor extends React.Component{

	constructor(props:any){

		super(props);
		this.state = {
			 tipo : props.tipo,
			 coordenadas :  props.coordenadas,
			 purpleOptions : props.color
		};
	}

render(){
	return (
		<div>
			<LeafLetHeatmapComponent/>
		</div>
	);
}
}

