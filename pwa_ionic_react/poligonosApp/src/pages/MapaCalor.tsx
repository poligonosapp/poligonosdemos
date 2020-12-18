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

export default class MapaCalor extends React.Component{

    // let mymap;

	constructor(props:any){

		super(props);

		this.state = {
			 tipo : props.tipo,
			 coordenadas :  props.coordenadas,
			 purpleOptions : props.color,
             mymap = L.map('mapid').setView([51.505, -0.09], 13);
		};
	}
	 // this.state.mymap = L.map('mapid').setView([51.505, -0.09], 13);

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);

var marker = L.marker([51.5, -0.09]).addTo(mymap);

var polygonL = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(mymap);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygonL.bindPopup("I am a polygon.");

var popup = L.popup()
    .setLatLng([51.5, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(mymap);

	function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

mymap.on('click', onMapClick);

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);

// @ts-ignore
render(){
	return (
		<div>
		<CircularProgress />
		 <div id="mapid">{mymap}</div>
			<LeafLetHeatmapComponent/>
		</div>
	);
}
}

