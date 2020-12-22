import HookUseMap from "../components/HookUseMap";

import HookUseMapEvent from "../components/HookUseMapEvent";

import HookUseMapEvents from "../components/HookUseMapEvents";

import ExampleWithManyStates from "../components/ExampleWithManyStates";

const graphql = require('babel-plugin-relay/macro');

import { Map, Circle, MapContainer, TileLayer, Marker, Popup, MapConsumer, useMapEvent } from "react-leafet";

import L, {circle, CRS} from "leaflet";

import React, { useState, useEffect, useReducer, useCallback, FormEvent, useRef } from "react";

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput } from '@ionic/react';

import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

import CircularProgress from '@material-ui/core/CircularProgress';
import MapaCalor, { Feature } from "./FeatureGeoJSONMapaCalor";

import FeatureGeoJSONMapaCalor from "./FeatureGeoJSONMapaCalor";

const {accessToken} = 'pk.eyJ1IjoibHVpc21lbmRlczA3MCIsImEiOiJja2Y1cHp2dzcwZzV3MnpueGIwMThtZHo0In0.scLMoUkXBo03JD4ir3UGYA';

// const {accessToken} = require('./accessToken');

let mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: {accessToken}
}).addTo(mymap);

let marker = L.marker([51.5, -0.09]).addTo(mymap);

let polygonL = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(mymap);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
// circle.bindPopup("I am a circle.");
polygonL.bindPopup("I am a polygon.");

var popup22 = L.popup()
    .setLatLng([51.5, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(mymap);

function onMapClick2(e) {
    alert("You clicked the map at " + e.latlng);
}

mymap.on('click', onMapClick);

let popup2 = L.popup();

function onMapClick(e) {
    popup2
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);

let poligono = null;

try{
    // poligono = require('./polygon.geojson');

  // ExampleWithManyStates(value={ this.props.mymap:{mymap},this.props.accessToken:{accessToken} } );

}catch(e){

    console.log('require poligono failed');

}

if(poligono == null){
    console.log("\nleitura geojson falhou\n");
}

console.log("\npoligono\n");
console.log(poligono);
console.log("\npolygonL\n");
// console.log(polygonoL);




const Tab1: React.FC = (props) => {

    // const [ name, setName ] = useState('Max');

    // const  [tipo, setTipo] =  useState(poligono.type);
    // const [coordenadas, setCoordenadas] = useState(poligono.coordinates);
    // const [purpleOptions, setPurpleOptions]:useState('purple');
    const [setMyMap] = useState({mymap});
    const [setAccessToken] = useState({accessToken});

    // ExampleWithManyStates();

  // @ts-ignore
  return (
    <IonPage>
      <CircularProgress />

        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>


            MapaCalor aqui
          <FeatureGeoJSONMapaCalor value={mymap}/>

          CRS Simple

          <Map center={[0, 0]} zoom={2}  doubleClickZoom={false} crs={CRS.Simple}>

            <HookUseMap />
            <HookUseMapEvent />
            <HookUseMapEvents />

          </Map>

          CRS Earth

          <Map center={[0, 0]} zoom={2}  doubleClickZoom={false} crs={CRS.Earth}>

            <HookUseMap />
            <HookUseMapEvent />
            <HookUseMapEvents />

          </Map>




        </MapContainer>





        {/*<FeatureGeoJSONMapaCalor

            this.setState(
        {
            tipo:polygonL.type,
            coordenadas:polygonL.coordinates,
            purpleOptions:'purple',
            mymap:mymap,
            accessToken:accessToken
        }
        )
        />

    <FeatureGeoJSONMapaCalor

        this.setState(
{
tipo:poligono.type,
coordenadas:poligono.coordinates,
purpleOptions:'purple',
mymap:null,
accessToken:accessToken
}
)
/>*/}

      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Mapa"  />

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
