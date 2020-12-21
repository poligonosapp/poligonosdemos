import { IonInput } from "@ionic/react";

import React, { Component, useState, FormEvent } from "react";
import { render } from "react-dom";
import { TileLayer, Marker, Popup } from "react-leaflet";
import { mockComponent } from "react-dom/test-utils";
import LeafLetHeatmapComponent from "./LeafLetHeatmapComponent";

import ExampleWithManyStates from "../components/ExampleWithManyStates";

import type { Feature, Polygon, Geometry, FeatureCollection } from "geojson";
export type {Feature, Polygon, Geometry, FeatureCollection};

declare class ComponenteFeature<Feature> {
  props: Feature
}

declare class ComponentePolygon<Polygon> {
  props: Polygon
}

declare class ComponenteGeometry<Geometry> {
  props: Geometry
}

import "leaflet/dist/leaflet.css";

import "leaflet/dist/leaflet.js";

import L, { circle } from "leaflet";

import CircularProgress from "@material-ui/core/CircularProgress";
import Tab1 from "./Tab1";

// import * as dadosPoligono from '../polygon.geojson';

public class FeatureGeoJSONMapaCalor extends React.Component implements FeatureCollection{
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

    this.myRef = React.createRef();

    this.state = {
      count: 0+ props.count,
     // tipo: props.tipo,
     // coordenadas: props.coordenadas,
      purpleOptions: props.color,
      mymap: L.map,
      accessToken: props.accessToken,
      pol: require("./polygon.geojson")
    };
  }




// @ts-ignore
render()
{
  return (
    <div>
      <CircularProgress />

      <ExampleWithManyStates value={this.state.mymap}/>

      <div id="mapid">{this.state.mymap}</div>

      <div ref={this.myRef} />


      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: (this.state.count + 1) })}>
          Click me
          <LeafLetHeatmapComponent />
        </button>
      </div>

    </div>
  );
}
}

export default FeatureGeoJSONMapaCalor;

