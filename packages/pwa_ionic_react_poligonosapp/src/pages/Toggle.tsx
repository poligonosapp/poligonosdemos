import PropTypes from 'prop-types';

import L, { circle, CRS } from 'leaflet';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {
  IonSpinner,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
} from '@ionic/react';
import PoligonoDesenho from 'models/poligono';

// import PoligonoDesenho from './models/poligono';// backend

/// <reference path="react.d.ts" />
 interface Props{
   isToggleOn: boolean;
  mymap: L.Map;
  poligono: typeof PoligonoDesenho;

}

// return (oldObj as any).someProperty;

class Toggle extends React.Component<Props,
  { isToggleOn: Boolean, mymap: L.Map, poligono: typeof PoligonoDesenho }> {

  handleClick() {

  }

  render() {
    // @ts-ignore
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar><IonTitle>POLÍGONO</IonTitle></IonToolbar>
          <IonContent>

{this.props.poligono}

            <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'ON' : 'OFF'}
          </button></IonContent>
        </IonHeader>
      </IonPage>
    );
  }
}

Toggle.propTypes = {
  poligono: typeof PoligonoDesenho
};

// @ts-ignore
ReactDOM.render(
  <Toggle isToggleOn={this.state.isToggleOn} mymap={this.state.mymap}/>,
  document.getElementById('root')
);

// module.exports = Toggle;
export default Toggle;// typescript 2307