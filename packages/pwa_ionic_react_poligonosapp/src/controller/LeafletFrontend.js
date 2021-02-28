import L, { circle, CRS } from 'leaflet'
import { accessToken } from "./accessToken";

var decoded = jwt_decode(accessToken);

console.log('token decoded');


function fun(const hostname, const port) {
    // Load HTTP module
    const http = require('http')

    // const hostname = '127.0.0.1'
    // const hostname = 'https://www.poligonosapp.herokuapp.com'
    // const port = 8000

    // Create HTTP server
    const server = http.createServer((req, res) => {
        // Set the response HTTP header with HTTP status and Content type
        res.writeHead(200, { 'Content-Type': 'text/plain' })

        // Send the response body "Hello World"
        res.end('Hello World LeafletServer request\n')
    })

    // Prints a log once the server starts listening
    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`)
    })

    let mymap = L.map('mapid').setView([51.505, -0.09], 13)

    L.tileLayer(
        'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
        {
            attribution:
                'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken:
                'sk.eyJ1IjoibHVpc21lbmRlczA3MCIsImEiOiJja2owaXNwenQzNW5lMzBscmp1YTNyYjJjIn0.58Rc1G6XH1wX0bOB-kUNPQ',
        }
    ).addTo(mymap)

    let marker = L.marker([51.5, -0.09]).addTo(mymap)

    let circle = L.circle([51.508, -0.11], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500,
    }).addTo(mymap)

    let polygon = L.polygon([
        [51.509, -0.08],
        [51.503, -0.06],
        [51.51, -0.047],
    ]).addTo(mymap)

    marker.bindPopup('<b>Hello world!</b><br>I am a popup.').openPopup()
    circle.bindPopup('I am a circle.')
    polygon.bindPopup('I am a polygon.')

    let popup = L.popup()
        .setLatLng([51.5, -0.09])
        .setContent('I am a standalone popup.')
        .openOn(mymap)

    function onMapClick(e) {
        alert('You clicked the map at ' + e.latlng)
        let polygon = require('./src/polygon.geojson')
        popup.setLatLng(polygon[0].geometry.coordinates)
    }

    mymap.on('click', onMapClick)

    // let popup = L.popup();

    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent('You clicked the map at ' + e.latlng.toString())
            .openOn(mymap)
    }

    mymap.on('click', onMapClick)

    let express = require('express')
    let cors = require('cors')
    let app = express()

    app.use(cors())

    app.get('/products/:id', function (req, res, next) {
        res.json({ msg: 'This is CORS-enabled for all origins!' })
    })

    app.listen(80, function () {
        console.log('CORS-enabled web server listening on port 80')
    })

    // express = require("express");
    // app = express();

    app.get('/', function (req, res) {
        res.send('Hello World')
    })

    // const a = fetch(hostname);
    // return a.json

    app.listen(3000)
}

try {
    fun('https://www.poligonosapp.herokuapp.com', 8000)
    fun('127.0.0.1', 8000)
} catch (e) {
    console.log('server fault')
}
