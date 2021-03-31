import L, { circle, CRS, Map as LeafletMap } from 'leaflet';

import { LeafletProvider as MapContainer, Polygon as LeafletPolygon }  from '@react-leaflet/core';

import { EditControl, MapControl } from 'react-leaflet-draw';

import {
  GeoJSON,
  Polygon,
  TileLayer,
  Pane,
  Popup,
  Marker,
  Rectangle,
  LayersControl,
  Circle, FeatureGroup, LayerGroup
} from "react-leaflet";
import { render } from "react-dom";
import React from "react";

import {
  IonSpinner,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
} from '@ionic/react';

const center = [51.505, -0.09];

const position = [51.505, -0.09];

const rectangle = [
  [51.49, -0.08],
  [51.5, -0.06],
];

// initialize the map on the "map" div with a given center and zoom
let map = L.map('map', {
    center: [51.505, -0.09],
    zoom: 13
});

//ReactDOM.render(<LayerControlForm>{map}</LayerControlForm>,
//  document.getElementById('root'));

const map2 = function MyComponent() {
  const map = useMapEvent('click', () => {
    map.setCenter([50.5, 30.5]);
  })
  return map;
}

// let MapContainer = useMapContainer();
// let MapConsumer = useMapConsumer();

const LayerControlForm = () => {

  return (
    <IonPage>

      <MapContainer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png" center={center} zoom={13} scrollWheelZoom={false}>
        
        {map2}
        
        {map}
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="OpenStreetMap.Mapnik">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="OpenStreetMap.BlackAndWhite">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
          <LayersControl.Overlay name="Marker with popup">
            <Marker position={position}>
              {map}
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
            </Marker>
          </LayersControl.Overlay>
          <LayersControl.Overlay checked name="Layer group with circles">
            <LayerGroup>
              <Circle
                center={center}
                pathOptions={{ fillColor: 'blue' }}
                radius={200}
              />
              <Circle
                center={center}
                pathOptions={{ fillColor: 'red' }}
                radius={100}
                stroke={false}
              />
              <LayerGroup>
                <Circle
                  center={[51.51, -0.08]}
                  pathOptions={{ color: 'green', fillColor: 'green' }}
                  radius={100}
                />
              </LayerGroup>
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Feature group">
            <FeatureGroup pathOptions={{ color: 'purple' }}>
              <Popup>Popup in FeatureGroup</Popup>
              <Circle center={[51.51, -0.06]} radius={200} />
              <Rectangle bounds={rectangle} />
            </FeatureGroup>
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
    </IonPage>
  )
}




export default LayerControlForm;


