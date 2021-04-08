import ErrorBoundary from './ErrorBoundary';

import PropTypes from 'prop-types';

import L, { circle, CRS } from 'leaflet';
import React, { Component, useState } from "react";
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
 //interface IProps{
type IProps = {
   isToggleOn: boolean;
  mymap: L.Map;
  // poligono: typeof PoligonoDesenho;
}
;// end type

// return (oldObj as any).someProperty;

class Toggle extends React.Component {
  
  constructor(props : IProps) {
    
    super(props);

    // this.state = { isToggleOn : props.isToggleOn };

    // Aqui utilizamos o `bind` para que o `this` funcione dentro da nossa callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
 this.setState(state => ({
      // isToggleOn: !state.isToggleOn
    }));
  }

  render() {

    // This must be exactly one element or it will warn.
    const children = this.props.children;

    // this.state.isToggleOn = useState(this.props.isToggleOn);

    // @ts-ignore
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar><IonTitle>POLÍGONO</IonTitle></IonToolbar>
          <IonContent>

            <div>
              {children}
            </div>

            <button onClick={this.handleClick}>

          </button>

          </IonContent>
        </IonHeader>
      </IonPage>
    );
  }
}



// module.exports = Toggle;
export default Toggle;// typescript 2307