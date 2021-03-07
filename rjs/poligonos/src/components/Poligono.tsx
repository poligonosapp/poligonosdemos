import React, {Component} from 'react';

import { Map, TileLayer, GeoJSON, MapContainer } from 'react-leaflet';

import { StyleSheet, Text, View } from 'react-native';

const data = require('./polygon.geojson');

function Poligono(){
    return(
        <MapContainer className=".main" styles={color:"blue"} zoom={13}>

            <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
            
        </TyleLayer>

        <GeoJSON attribution="&copy; credits due..." data={this.data} />

        </MapContainer>

        

    );
}