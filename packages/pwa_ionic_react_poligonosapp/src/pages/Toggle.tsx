import ErrorBoundary from './ErrorBoundary';

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
  
  constructor(props) {
    
    super(props);

    this.state = { isToggleOn: true };

    // Aqui utilizamos o `bind` para que o `this` funcione dentro da nossa callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
 this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
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
  <Toggle onClick={this.handleClick} >
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </Toggle>,
  document.getElementById('root')
);

// module.exports = Toggle;
export default Toggle;// typescript 2307