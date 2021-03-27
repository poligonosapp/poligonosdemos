//Require Mongoose
import L from "leaflet";

let mongoose = require('mongoose');

//Define a schema
// let Schema = mongoose.Schema;


//interface Props {
// any other props that come into the component, you don't have to explicitly define children.
  // pd: PoligonoDesenho;
// }

// let mymap = L.map('mapid').setView([51.505, -0.09], 13);//mock

const PoligonoDesenho = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Polygon'],
        required: true,
    },
    coordinates: {
        type: [[[Number]]], // Array of arrays of arrays of numbers
        required: true,
    },
})

const CidadeDesenho = new mongoose.Schema({
    name: String,
    location: PoligonoDesenho,
})

export default PoligonoDesenho;
