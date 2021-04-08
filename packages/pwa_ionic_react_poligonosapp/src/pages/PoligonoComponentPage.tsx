import { tsConstructorType } from '@babel/types'
import L from 'leaflet'
// import { useState } from 'react';
import * as React from 'react' //const Button
import { Component, useState } from 'react'

// import { Button } from 'react-native-web';import { Button } from 'react-native';

//import { mymap } from "./Tab1";
// import { mymap } from './Tab1';

interface Props {
    // any other props that come into the component, you don't have to explicitly define children.
}

const Button: React.FC<Props> = ({ children, ...props }) => {
    return <Button {...props}>{children}</Button>
}

import { GeoJSON, Polygon, TileLayer, Pane, Popup, Marker } from 'react-leaflet'

interface IProps {
    mymap: L.Map
}

class PoligonoComponentPage extends React.Component {

//let mymap = new L.Map();
    // eslint-disable-next-line
    constructor(props: IProps) {
        super(props);
        // this.state.mymap = useState(props.mymap);
    }

    render() {
        return require('./polygons.geojson');
    } // end render
} // end class

export default PoligonoComponentPage

function mymap(mymap: L.Map): L.Map {
    return mymap
}
