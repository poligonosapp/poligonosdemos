// let LeafletFrontend;

import L, { circle, CRS } from 'leaflet';

const accessToken = "process.env.LEAFLET_ACCESS_TOKEN";

import jwt_decode from "jwt_decode";
import LeafletFrontend from './frontend';

let decoded = jwt_decode(accessToken);

console.log('token decoded');

// let mymap = L.map('mapid').setView([51.505, -0.09], 13);


function fun(L.Map: mymap) {
    
try {
    mymap = (typeof L.Map)LeafletFrontend('process.env.endpoint', 8000, mymap);
    
    return mymap;
    
} catch (e) {
    console.log('server fault');
    return;
}

}

export default mymap;