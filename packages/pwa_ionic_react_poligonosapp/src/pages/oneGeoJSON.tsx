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

export function oneGeoJSON(mymap:L.Map): [any, any] {
    return useState(async () => {

        L.tileLayer(process.env.ATRIBUTION, {
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

module.exports = oneGeoJSON;
