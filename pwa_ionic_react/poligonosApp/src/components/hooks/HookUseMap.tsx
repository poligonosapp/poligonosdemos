import { Map, Circle, MapContainer, TileLayer, Marker, Popup, MapConsumer, useMapEvent, useMap } from "react-leafet";
import FeatureGeoJSONMapaCalor from "../../pages/FeatureGeoJSONMapaCalor";

function MyComponent() {
  const map = useMap();
  console.log('map center:', map.getCenter());
  return null
}

function MyMapComponent() {
  return (
    <MapContainer center={[50.5, 30.5]} zoom={13}>
      <MyComponent />
    </MapContainer>
  )
}

export default HookUseMap;
