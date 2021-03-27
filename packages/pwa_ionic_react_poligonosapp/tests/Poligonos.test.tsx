import L, { map } from "leaflet";

require('babel-plugin-import-graphql');
require('babel-plugin-graphql-tag');
require('module:graphql-tag');
require('graphql-tag');
const { assert } = require('@hapi/hoek');

// const supertest = require('supertest');

const request = require('supertest');
const express = require('express');

const app = express();

// @ts-ignore
import TestRenderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
// import { GET_DOG_QUERY, Dog } from './dog';

const mocks = []; // We'll fill this in next

import Tab1 from '../src/pages/Tab1';
import { PoligonoComponentPage } from "../src/pages/PoligonoComponentPage";

it('renders without error', () => {

    let mapData  = L.map('mapid').setView([51.505, -0.09], 13);//mock
        
    // mapData = require('./src/databases/realmweb/realmweb.ts');
  
});

it('should redux gql leaflet geojson', () => {

    fail(true);
});

it('renders without error', () => {

    let mapData;
    
    // = L.map('mapid').setView([51.505, -0.09], 13);//mock
        
    mapData = require('./src/databases/realmweb/realmweb.ts');
    // @ts-ignore
  
});


app.get('/poligono', function (req, res) {
    res.status(200).json({ name: 'fail' });
})

request(app)
    .get('/poligono')
    .expect('Content-Type', /json/)
    .expect('Content-Length', '15')
    .expect(200)
    .end(function (err, res) {
        if (err) throw err
    })

describe('GET /poligono', function () {
    it('responds with json', function (done) {
        request(app)
            .get('/poligono')
            .set('Accept', 'application/json')
            .expect('Content-Type', /geojson/)
            .expect(200, done);
    })
})

describe('GET /poligono', function () {
    it('responds with json', function (done) {
        request(app)
            .get('/poligono')
            .auth('username', 'password')
            .set('Accept', 'application/json')
            .expect('Content-Type', /geojson/)
            .expect(200, done);
    })
})

describe('GET /api/v1/poligonos', function () {
    it('should respond with geojson', function () {
        return request(app)
            .get('process.env.enpoint'.concat('/api/v1/poligonos'))
            .set('Accept', 'application/json')
            .expect('Content-Type', /geojson/)
            .expect(200)
            .then((response) => {
                assert(response.body.any, '{[]}')
            })
    })
})



export {}
