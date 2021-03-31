import { LeafletConsumer } from 'react-leaflet';
import './variables.css';

import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';
import { render } from '@testing-library/react';

// initialize the map on the "map" div with a given center and zoom
let map = L.map('map', {
    center: [51.505, -0.09],
    zoom: 13
});

// create a red polygon from an array of LatLng points
let latlngs = [[37, -109.05], [41, -109.03], [41, -102.05], [37, -102.04]];

let polygon = L.polygon(latlngs, {color: 'red'}).addTo(map);

// zoom the map to the polygon
map.fitBounds(polygon.getBounds());
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



function MapPlaceholder() {

  const MapContainerContextConsumer = React.createContext(LeafletConsumer);
  const valueConsumer = useContext(MapContainer);

  const MapContainerContext = React.createContext(MapContainer);
   const value = useContext(MapContainer);

  return (
    <p>
      Map of London.{' '}
      <noscript>You need to enable JavaScript to see this map.</noscript>
    </p>
  )
}

export const PolygonExample = () => {
  
  return (
      <LeafletConsumer>
      {(context: L.Polygon[]) => console.log(context.map)}
      <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
        placeholder={<MapPlaceholder />}>{ map }{polygon}{latlngsMultiDimensionalArray}
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
</LeafletConsumer>
      
    )
  
}

render(<PolygonExample />);



export default PolygonExample;