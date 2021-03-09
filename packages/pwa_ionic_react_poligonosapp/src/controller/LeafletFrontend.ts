// let LeafletFrontend;

import L, { circle, CRS } from 'leaflet';

const accessToken = "process.env.LEAFLET_ACCESS_TOKEN";


import LeafletFrontend from './frontend';

import React, {Component} from 'react';
// import jwt_decode from "jwt_decode";
// let decoded = jwt_decode(accessToken);

let mymapAux = require('./frontend');

console.log('token decoded');

// let mymap = L.map('mapid').setView([51.505, -0.09], 13);

class LeafletFrontend extends Component{
    constructor(props){
        super(props);

        this.state = {
            mymap = mymapAux('process.env.HOST','process.env.PORT',props.mymap)
        }

    }
}


function fun(mymap:L.Map) {
    
    try {
    
        this.state.mymap = new LeafletFrontend('process.env.endpoint', 8100, mymap);
        
        mymap = this.state.map;
    
    // return mymap;
    
} catch (e) {
    console.log('server fault');
}

    return mymap;

};


// return <fun props={this.state.mymap}/>;

export default LeafletFrontend;