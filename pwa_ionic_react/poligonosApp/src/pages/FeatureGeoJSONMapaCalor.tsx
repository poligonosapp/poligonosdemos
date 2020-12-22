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
import { accessToken } from "./accessToken";

// import * as dadosPoligono from '../polygon.geojson';

class FeatureGeoJSONMapaCalor extends React.Component implements FeatureCollection{

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

