import React, {Component} from 'react';

import { Map, TileLayer, GeoJSON, MapContainer } from 'react-leaflet';

import { StyleSheet, Text, View } from 'react-native';

const data = require('./polygon.geojson');

const divStyle = {
  color: 'blue'
};

function Poligono(){
    return (
        <div style={divStyle}>
        <MapContainer className=".main" zoom={13}>

            <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
            
        </TyleLayer>

        <GeoJSON  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" data={this.data} />

        </MapContainer>

        <Map  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png">
            {this.data}
        </Map>

        </div>

        

    );
}