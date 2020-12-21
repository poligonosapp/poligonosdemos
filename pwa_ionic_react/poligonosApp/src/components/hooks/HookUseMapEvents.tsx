import { Map, Circle, MapContainer, TileLayer, Marker, Popup, MapConsumer, useMapEvents } from "react-leafet";
import FeatureGeoJSONMapaCalor from "../../pages/FeatureGeoJSONMapaCalor";

function MyComponent() {
  const map = useMapEvents({
    click: () => {
      map.locate()
    },
    locationfound: (location) => {
      console.log('location found:', location)
    },
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

export default HookUseMapEvents;
