// import { EditControl } from "react-leaflet-draw";


import React, {
    FC,
    useState,
    useEffect,
    useReducer,
    FormEvent,
    useRef,
} from 'react';

import { Map, TileLayer, FeatureGroup, Circle, Polygon, GeoJSON, Pane, Popup, Marker } from "react-leaflet";
// import { EditControl } from "react-leaflet-draw";
// import { Map, TileLayer, FeatureGroup, Circle } from 'react-leaflet';
// import { EditControl } from "react-leaflet-draw";


// import 'DrawComponet.css';

import 'leaflet/dist/leaflet.css';
// import 'leaflet-draw/dist/leaflet.draw.css';

const position = [51.505, -0.09];

 const DrawComponent = () => (
  <FeatureGroup>
     <Circle center={[51.51, -0.06]} radius={200} />
     <Pane name="custom" style={{ zIndex: 100 }}>
                            
                    <Polygon positions={position} atribution="process.env.ATRIBUTION" URL="process.env.URL">
                        <GeoJSON atribution="process.env.ATRIBUTION" data={this.state.allData}/>
                    </Polygon>
                
                </Pane>
  </FeatureGroup>
);

 export default DrawComponent;

// module.exports = {DrawComponent};