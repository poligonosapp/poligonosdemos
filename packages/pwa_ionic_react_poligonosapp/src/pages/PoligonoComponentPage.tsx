import { tsConstructorType } from '@babel/types';
import L from 'leaflet';
// import { useState } from 'react';
import * as React from 'react';//const Button
import { Component, useState } from 'react';

// import { Button } from 'react-native-web';import { Button } from 'react-native';

//import { mymap } from "./Tab1";
// import { mymap } from './Tab1';

interface Props {
// any other props that come into the component, you don't have to explicitly define children.
}

const Button: React.FC<Props> = ({ children, ...props }) => {
  return (
      <Button {...props}>{children}</Button>
  );
};

import { GeoJSON, Polygon, TileLayer, Pane, Popup, Marker } from "react-leaflet";

class PoligonoComponentPage extends React.Component{

// eslint-disable-next-line
    constructor(props: {mymap: L.Map}){
        super(props);

        this.state = {

            mymap: mymap(this.props.mymap)

        };
        
}

    render() {
        
return useState(async (): Promise<[L.Map, L.Map]> => {

        // let myLayer = L.geoJSON().addTo(mymap);
        // myLayer.addData(mymap.['type'] === 'Polygon');

       L.tileLayer(process.env.ATRIBUTION.toString(), {
            maxZoom: 18
        }).addTo(mymap(mymap));

        

        const initialState = fetch(process.env.endpoint).then(
            function (response) {
                return response.json();
            }
        ).then(

            function (data) {

                L.geoJSON(
                    data,
                    {
                        style: function (feature) {
                            return { color: 'green' };
                        }
                    }
                ).addTo(mymap(mymap));


            }


        );

        // fetchResponse = initialState;
        return initialState;

    });

    } // end render
} // end class

export default PoligonoComponentPage;

function mymap(mymap: L.Map):L.Map {
    return mymap;
}

