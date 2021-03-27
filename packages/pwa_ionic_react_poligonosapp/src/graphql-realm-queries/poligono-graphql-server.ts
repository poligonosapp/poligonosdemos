let $ = require('jquery')(window);

import L from 'leaflet';

let mymap = require('realmweb');

let { graphql, Query, buildSchema } = require('graphql');

let grapqhlRealmEndpoint = process.env.GRAPHQL_REALM_ENDPOINT;

// import { Query } from 'mongoose';
import PoligonoDesenho from '../src/models/poligono';

// const schema = '.graphql.config.json';

// const schema = './models/poligono';

try{
    const schema = buildSchema(
    type Query {
        poligono: PoligonoDesenho
    }
);


let pol = new PoligonoDesenho();
// realm 
// pol = (L.Map) mymap;
schema.poligono = mymap;

let pol2 = new PoligonoDesenho();

// pol2 = (L.Map) mymap;
schema.poligono = mymap;

let poligonos = { pol, pol2 };



let root = {
    poligonos: () => {
        return poligonos;
    },
};

graphql(schema, '{poligonos}', root).then((response: PoligonoDesenho) => {
        console.log(response)
    }
);

} catch (e) {
    
}

function type(type: any, Query: any, arg2: { poligono: any; }) {
    throw new Error('Function not implemented.');
}
