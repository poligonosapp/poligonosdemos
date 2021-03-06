const { assert } = require('@hapi/hoek')

// const supertest = require('supertest');

const request = require('supertest')
const express = require('express')

const app = express()

app.get('/poligono', function (req, res) {
    res.status(200).json({ name: 'john' })
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
            .expect(200, done)
    })
})

describe('GET /poligono', function () {
    it('responds with json', function (done) {
        request(app)
            .get('/poligono')
            .auth('username', 'password')
            .set('Accept', 'application/json')
            .expect('Content-Type', /geojson/)
            .expect(200, done)
    })
})

describe('GET /poligonos', function () {
    it('responds with json', function () {
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
