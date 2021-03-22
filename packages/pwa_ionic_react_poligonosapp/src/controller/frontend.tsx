// import LayerControlDemo from './pages/LayerControlDemo';

import React, { useState } from "react";

const rootElement = document.getElementById("root");

import { GeoJSON, Polygon, TileLayer, Pane, Popup, Marker } from "react-leaflet";



// import {useMapEvents} from 'react-leaflet';

// import {useMapEvents} from 'leaflet';

const $ = require('jquery')( window );

// and import via
import * as JWT from 'jwt-decode';

// use JWT() for decode. Not jwt-decode() !!
// let t = JWT(token);

const jwt = require('express-jwt')
import jwt_decode from 'jwt-decode';// - is not _  TS2307 fixed
import L, { map } from "leaflet";
// import $ from 'jquery';

let mymap;

// mymap = require('./tokenLeaflet');

export default function getLeafletMapClick(hostname: string, port: number, mymap: L.Map) {

    mymap = L.map('mapid').setView([51.505, -0.09], 13);

    try {
        // Load HTTP module
        let http = require('http');
        // Create HTTP server
        let server = http.createServer(function(req: { statusCode: number; }, res: { writeHead: (arg0: number, arg1: { "Content-Type": string; }) => void; send: (arg0: L.Map) => void; statusCode: (arg0: number) => void; end: (arg0: string) => void; }) {
            // Set the response HTTP header with HTTP status and Content type
            //https://openid.net/specs/openid-connect-core-1_0.html#NonceNotes
            if (req.statusCode == 200) {
                $.alert("listening access token");

                // heroku dyno api response with mapbox jwt openid authorization
                res.writeHead(200, { "Content-Type": "text/plain" });

                mymap = require("./tokenLeaflet");

                // Send the response body "Hello World"
                res.send(mymap);
                res.statusCode(200); // OK
                res.end("Hello World Leaflet frontend request\n");

                // Prints a log once the server starts listening
                server.listen(port, hostname, () => {
                    console.log(`Server running at http://${hostname}:${port}/`);
                });

            } else {
                $.alert("access token is not listening"); //jwt mapbox leaflet
            }


        }).listen(8080);
    } catch (e) {
        $.alert('no server to listen');
    }

    

    


    
    // let decoded = jwt_decode(process.env.LEAFLET_TOKEN);

    

    $(document).ready(
        function () {
            // $("#root").css("color", "blue");
            $("#root").html(
                L.tileLayer(
        'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
        {
            attribution:
                'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: process.env.LEAFLET_TOKEN,
        }
    ).addTo(mymap)
            );
        }
    );

    let marker = L.marker([51.5, -0.09]).addTo(mymap);

    let circle = L.circle([51.508, -0.11], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500,
    }).addTo(mymap);

    let polygon = L.polygon([
        [51.509, -0.08],
        [51.503, -0.06],
        [51.51, -0.047],
    ]).addTo(mymap);

    marker.bindPopup('<b>Hello world!</b><br>I am a popup.').openPopup();
    circle.bindPopup('I am a circle.');
    polygon.bindPopup('I am a polygon.');

    let popup = L.popup()
        .setLatLng([51.5, -0.09])
        .setContent('I am a standalone popup.')
        .openOn(mymap);

    

    // mymap.on('click', onMapClick);
    let express = require('express');
    let cors = require('cors');
    let app = express();

    app.use(cors());

    app.get('/poligonos/:id', function (req: any, res: { json: (arg0: { msg: string; }) => void; }, next: any) {
        res.json({ msg: 'This is CORS-enabled for all origins!' });
    });

    app.listen(80, function () {
        console.log('CORS-enabled web server listening on port 80');
    });

    app.get('/', function (req: any, res: { send: (arg0: string) => void; }) {
        res.send('Hello World');
    });

    app.listen(3000);// poligonosapp api visitors

    return mymap;
}





