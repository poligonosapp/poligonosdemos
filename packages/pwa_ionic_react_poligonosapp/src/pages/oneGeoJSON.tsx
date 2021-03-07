import L from 'leaflet';
import { useState } from 'react';
//import { mymap } from "./Tab1";
// import { mymap } from './Tab1';

default export function mapFetchFunction(mymap:L.Map): [any, any] {
    return useState(async () => {

        L.tileLayer('process.env.ATRIBUTION', {
            maxZoom: 18
        }).addTo(mymap);

        const initialState = fetch('process.env.endpoint').then(
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

module.exports = {};
