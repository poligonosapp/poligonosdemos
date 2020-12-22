const {Map} = require('react-leafet');

import { Map, Circle, MapContainer, TileLayer, Marker, Popup, MapConsumer, useMapEvent } from "react-leafet";
import FeatureGeoJSONMapaCalor from "../../pages/FeatureGeoJSONMapaCalor";

function MyComponent() {
  const map = useMapEvent('click', () => {
    map.setCenter([50.5, 30.5])
  })
  return null
}

function MyMapComponent() {
  return (
    <MapContainer center={[50.5, 30.5]} zoom={13}>
      <FeatureGeoJSONMapaCalor />
    </MapContainer>
  )
}

function HookUseMapEvent(){
  MyComponent();
  MyMapComponent();
}

export default HookUseMapEvent;
