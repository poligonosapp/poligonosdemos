import React from "react";

// const {Map} = require('react-leaflet');

import { MapContainer, useMapEvent } from "react-leaflet";
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
