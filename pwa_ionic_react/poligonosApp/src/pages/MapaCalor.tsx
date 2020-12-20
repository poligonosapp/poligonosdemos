import { IonInput } from "@ionic/react";

import React, { Component, useState, FormEvent } from "react";
import { render } from "react-dom";
import { TileLayer, Marker, Popup } from "react-leaflet";
import { mockComponent } from "react-dom/test-utils";
import LeafLetHeatmapComponent from "./LeafLetHeatmapComponent";

import type { Feature, Polygon } from "geojson";

import "leaflet/dist/leaflet.css";

import "leaflet/dist/leaflet.js";

import L, { circle } from "leaflet";

import CircularProgress from "@material-ui/core/CircularProgress";

// import * as dadosPoligono from '../polygon.geojson';

public class MapaCalor extends React.Component {
  componentDidMount() {
    super.componentDidMount();
    console.log('\ncomponentDidMount...\n');
  }

  shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean {
    return super.shouldComponentUpdate(nextProps, nextState, nextContext);
  }

  componentWillUnmount() {
    super.componentWillUnmount();
    console.log('\ncomponentWillUnMount...\n');
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    super.componentDidCatch(error, errorInfo);
    console.log('\ncomponentDidCatch...\n');
  }

  getSnapshotBeforeUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>): any | null {
    return super.getSnapshotBeforeUpdate(prevProps, prevState);
  }

  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any) {
    super.componentDidUpdate(prevProps, prevState, snapshot);
    console.log('\ncomponentDidUpdate...\n');
  }

  toString(): string {
    console.log('\ntoString...\n');
    return super.toString();
  }

  toLocaleString(): string {
    return super.toLocaleString();
  }

  valueOf(): Object {
    return super.valueOf();
  }

  hasOwnProperty(v: PropertyKey): boolean {
    return super.hasOwnProperty(v);
  }

  isPrototypeOf(v: Object): boolean {
    return super.isPrototypeOf(v);
  }

  propertyIsEnumerable(v: PropertyKey): boolean {
    return super.propertyIsEnumerable(v);
  }

  context: any;

  setState<K extends keyof S>(state: ((prevState: Readonly<S>, props: Readonly<P>) => (Pick<S, K> | S | null)) | Pick<S, K> | S | null, callback?: () => void) {
    super.setState(state, callback);
  }

  forceUpdate(callback?: () => void) {
    super.forceUpdate(callback);
  }

  render() {
    return undefined;
  }

  readonly props: Readonly<P> & Readonly<{ children?: React.ReactNode }>;
  state: Readonly<S>;
  refs: { [p: string]: React.ReactInstance };

  constructor(props: any) {

    super(props);

    this.state = {
      count: 0,
      tipo: props.tipo,
      coordenadas: props.coordenadas,
      purpleOptions: props.color,
      mymap: props.mymap,
      accessToken: props.accessToken,
      pol: require("./polygon.geojson");
    };
  }

function ExampleWithManyStates() {
  // Declara várias variáveis de state!

  // Declara uma nova variável de state, que chamaremos de "count"
   const [count, setCount] = useState(this.state.count + 1);

  const [tipo, setTipo] = useState(poligono.geometry.type);
  const [coordenadas, setCoordenadas] = useState(poligono.geometry.coordinates);
  // const [purpleOptions, setPurpleOptions]:useState('purple');
  const [mymap, setMyMap] = useState(mymap);
  const [accessToken, setAccessToken] = useState(accessToken);

  const [pol, setPol] = useState(poligono.geometry[0]);

  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState("banana");
  const [todos, setTodos] = useState([{ text: "Learn Hooks" }]);
  // ...

  // Declara uma nova variável de state, que chamaremos de "count"
  //const [count, setCount] = useState(count + 1);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(0)}>
        Click me
      </button>
      <button onClick={() => setTipo(tipo + 1)}>
        Tipo me
      </button>
      <button onClick={() => setPol(pol + 1)}>
        Poligono me
      </button>
    </div>
  );
}


// @ts-ignore
render()
{
  return (
    <div>
      <CircularProgress />
      <div id="mapid">{this.state.mymap}</div>


      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
          <LeafLetHeatmapComponent />
        </button>
      </div>

    </div>
  );
}
}

