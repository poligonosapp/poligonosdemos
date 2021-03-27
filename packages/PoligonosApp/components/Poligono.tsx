import React, {Component} from 'react';

import { Map, TileLayer, Polygon, GeoJSON, MapContainer, Marker, Popup } from 'react-leaflet';

import { StyleSheet, Text, View } from 'react-native';

const data = require('./polygon.geojson');

let position = [51.505, -0.09];

function Poligono(){
    return(

        
        
render(
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        
        <Polygon attribution="&copy; credits due..." positions={data['coordinates']} ref={null}>
            <GeoJSON attribution="&copy; credits due..." data={this.data} />
        </Polygon>
        
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
)

    );
}