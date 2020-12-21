import React, { useState, useCallback } from "react";

import L, {circle} from "leaflet";

import {accessToken} from './accessToken';

let mymap = L.map('mapid').setView([51.505, -0.09], 13);

const ExampleWithManyStates = (props) => {

  // Declara várias variáveis de state!

  // Declara uma nova variável de state, que chamaremos de "count"
  const [count, setCount] = useState(0);

  // const [tipo, setTipo] = useState(poligono.geometry.type);

  // Feature feature;
  const [feature, setFeature] = useState(
    {
      "type": "Feature",
      "properties": { "party": "Republican" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [-104.05, 48.99],
            [-97.22, 48.98],
            [-96.58, 45.94],
            [-104.03, 45.94],
            [-104.05, 48.99]
          ]
        ]
      }
    }
  );
  // const [purpleOptions, setPurpleOptions]:useState('purple');

  const [setMyMap] = useState(
    {mymap}
    );

  const [setAccessToken] = useState({accessToken});

  // const [pol, setPol] = useState(poligono.geometry[0]);

  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState("banana");
  const [todos, setTodos] = useState([{ text: "Learn Hooks" }]);
  // ...

  // Declara uma nova variável de state, que chamaremos de "count"
  //const [count, setCount] = useState(count + 1);

  return (
    <div>
      <p>You clicked {count} times</p>
  <button onClick={() => setCount(count + 1)}>
  Click me
  </button>
  <button>
  Render Next GeoJson Feature Polygon
  </button>

  </div>
);
}

export default ExampleWithManyStates;
