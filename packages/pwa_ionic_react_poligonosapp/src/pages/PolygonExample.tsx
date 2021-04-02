import { IonText } from '@ionic/react';

import { LeafletConsumer } from 'react-leaflet';
import './variables.css';

import React from 'react';
import ReactDOM from 'react-dom';
const MapContainer = require('react-leaflet');
import { TileLayer, Marker, Popup, MapComponent } from 'react-leaflet';
import L from 'leaflet';
import { render } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';
// import { MapPlaceholder } from './MapPlaceholder';

// const mapboxUrl = process.env.LEAFLET_ACCESS_TOKEN;
const mapboxUrl = 'https://www.mapbox.com/about/maps/';

// initialize the map on the "map" div with a given center and zoom
// let map: L.Map;

const mapboxAttribution = '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>';// This assumes your map is the variable 'map'
// let credits = L.control.attribution().addTo(map);
// credits.addAttribution('© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>');;

let grayscale = L.tileLayer(mapboxUrl, {id: 'MapID', tileSize: 512, zoomOffset: -1, attribution: mapboxAttribution}),
    streets   = L.tileLayer(mapboxUrl, {id: 'MapID', tileSize: 512, zoomOffset: -1, attribution: mapboxAttribution});

let map = L.map('map', {
    center: [51.505, -0.09],
  zoom: 13,
  layers: [
    L.tileLayer('https://www.mapbox.com/about/maps/', {id: 'MapID', tileSize: 512, zoomOffset: -1, attribution: mapboxAttribution}),
    L.tileLayer('https://www.mapbox.com/about/maps/', {id: 'MapID', tileSize: 512, zoomOffset: -1, attribution: mapboxAttribution})
  ]
});

// create a red polygon from an array of LatLng points
// let latlngs = [[37, -109.05], [41, -109.03], [41, -102.05], [37, -102.04]];

// let polygon = L.polygon(latlngs, {color: 'red'}).addTo(map);

// zoom the map to the polygon
// map.fitBounds(polygon.getBounds());
// You can also pass an array of arrays of latlngs, with the first array representing the outer shape 
// and the other arrays representing holes in the outer shape:

var latlngsArray = [
  [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]], // outer ring
  [[37.29, -108.58],[40.71, -108.58],[40.71, -102.50],[37.29, -102.50]] // hole
];
// Additionally, you can pass a multi-dimensional array to represent a MultiPolygon shape.

let latlngsMultiDimensionalArray = [
  [ // first polygon
    [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]], // outer ring
    [[37.29, -108.58],[40.71, -108.58],[40.71, -102.50],[37.29, -102.50]] // hole
  ],
  [ // second polygon
    [[41, -111.03],[45, -111.04],[45, -104.05],[41, -104.05]]
  ]
];



const PolygonExample : React.FC = (props) => {

  map = L.map('map', {
    center: props.center,
  zoom: 13,
  layers: [
    L.tileLayer('https://www.poligonosapp.herokuapp.com', {id: 'MapID', tileSize: 512, zoomOffset: -1, attribution: mapboxAttribution}),
    L.tileLayer('https://www.poligonosapp.herokuapp.com', {id: 'MapID', tileSize: 512, zoomOffset: -1, attribution: mapboxAttribution})
  ]
});

  let a = <IonText>Map not found</IonText>;


  let b = <ErrorBoundary>
    if (isMapContainer()) {
      <IonText>Loading Polygon Example...</IonText>
    }
  </ErrorBoundary>;

  let c = isMapContainer();
    return (<div>{ a } || { b === true } && {c === false}</div>);
}
const center = [51.505, -0.09];
render(<PolygonExample center={center} />);



export default PolygonExample;

function isMapContainer() {
  return <LeafletConsumer>
    {(context: L.Polygon[]) => console.log(context.map)}
    <MapComponent
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}>
      
      <div id="map">
        {map}
      </div>
      
      
      {latlngsMultiDimensionalArray}

      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </MapComponent>
  </LeafletConsumer>;
}
