import React, { useState, FormEvent } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

import CircularProgress from '@material-ui/core/CircularProgress';
import MapaCalor from "./MapaCalor";
import L, {circle} from "leaflet";
// import MapaCalor from "./MapaCalor";

const accessToken = 'pk.eyJ1IjoibHVpc21lbmRlczA3MCIsImEiOiJja2Y1cHp2dzcwZzV3MnpueGIwMThtZHo0In0.scLMoUkXBo03JD4ir3UGYA';

let mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);

var marker = L.marker([51.5, -0.09]).addTo(mymap);

var polygonL = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(mymap);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
// circle.bindPopup("I am a circle.");
polygonL.bindPopup("I am a polygon.");

var popup = L.popup()
    .setLatLng([51.5, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(mymap);

function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

mymap.on('click', onMapClick);

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);

var poligono = {
    type : "Polygon",
    coordinates : [
        [ [ 0 , 0 ] , [ 3 , 6 ] , [ 6 , 1 ] , [ 0 , 0 ] ],
        [ [ 2 , 2 ] , [ 3 , 3 ] , [ 4 , 2 ] , [ 2 , 2 ] ]
    ]
};

poligono = require('./polygon.geojson');

console.log("\npoligono\n");
console.log(poligono);
console.log("\npolygonL\n");
console.log(polygonoL);

function ExampleWithManyStates() {
    // Declara várias variáveis de state!

    const  [tipo, setTipo]: useState(poligono.type);
        const [coordenadas, setCoorenadas]: useState(polygono.coordinates);
        const [purpleOptions, setPurpleOptions]:useState('purple');
        const [mymap, setMyMap]:useState(mymap);
        const [accessToken, setAccessToken]:useState(accessToken);

    const [age, setAge] = useState(42);
    const [fruit, setFruit] = useState('banana');
    const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
    // ...

    // Declara uma nova variável de state, que chamaremos de "count"
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

import { MapContainer, TileLayer, Marker, Popup } from 'react-leafet'

const Tab1: React.FC = () => {

    const [ name, setName ] = useState('Max');

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
        </MapContainer>

        MapaCalor aqui

        <MapaCalor this.setState={(e) => setTipo(e.target.value)}/>



        {/*<MapaCalor

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

    <MapaCalor

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
