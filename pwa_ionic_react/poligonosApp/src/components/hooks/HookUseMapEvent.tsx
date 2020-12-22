import React from "react";

const {Map} = require('react-leafet');

import { Map, Circle, MapContainer, TileLayer, Marker, Popup, MapConsumer, useMapEvent } from "react-leafet";
import FeatureGeoJSONMapaCalor from "../../pages/FeatureGeoJSONMapaCalor";

export function MyComponent() {
  const map = useMapEvent('click', () => {
    map.setCenter([50.5, 30.5])
  })
  return null
}

export function MyMapComponent() {
  return (
    <MapContainer center={[50.5, 30.5]} zoom={13}>
      <FeatureGeoJSONMapaCalor />
    </MapContainer>
  )
}

const HookUseMapEvent: React.FC = () => (

  <MyMapComponent/>

);

export default HookUseMapEvent;
