// let LeafletFrontend;

import L, { circle, CRS } from 'leaflet';

const accessToken = "process.env.LEAFLET_ACCESS_TOKEN";

import jwt_decode from "jwt_decode";
import LeafletFrontend from './frontend';

import React, {Component} from 'react';

let decoded = jwt_decode(accessToken);

let mymapAux = require('./frontend');

console.log('token decoded');

// let mymap = L.map('mapid').setView([51.505, -0.09], 13);

class LeafletFrontend extends Component{
    constructor(props){
        super(props);

        this.state = {
            mymap = mymapAux('process.env.HOST','process.env.PORT',props.mymap);
        }

    }
}


function fun(L.Map: mymap) {
    
try {
    this.state.mymap = (typeof L.Map)LeafletFrontend('process.env.endpoint', 8000, mymap);
    
    return mymap;
    
} catch (e) {
    console.log('server fault');
    return;
}

}

export default mymap;