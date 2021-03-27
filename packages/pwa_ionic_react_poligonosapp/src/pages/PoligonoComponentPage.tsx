import L from 'leaflet';
// import { useState } from 'react';
import * as React from 'react';//const Button
import { useState } from 'react';

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

export function PoligonoComponentPage(mymap:L.Map): [L.Map, L.Map] {
    return useState(async () => {

        // let myLayer = L.geoJSON().addTo(mymap);
        // myLayer.addData(mymap.['type'] === 'Polygon');

       L.tileLayer(process.env.ATRIBUTION.toString(), {
            maxZoom: 18
        }).addTo(mymap);

        

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
                ).addTo(mymap);


            }


        );

        // fetchResponse = initialState;
        return initialState;

    });
}

module.exports = PoligonoComponentPage;
