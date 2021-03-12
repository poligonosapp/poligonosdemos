const { assert } = require('@hapi/hoek');
const { runtime } = require('@babel/runtime')

// const supertest = require('supertest');

const request = require('supertest');
const express = require('express');
let cors = require('cors');

const app = express();

app.use(cors());
//app.use(logger('dev'))

app.get('/admins', function (req, res) {
    res.status(200).json({ name: 'fail' });
})

request(app)
    .get('/admin')
    .expect('Content-Type', /json/)
    .expect('Content-Length', '15')
    .expect(200)
    .end(function (err, res) {
        if (err) throw err
    });

describe('GET /admin', function () {
    it('responds with json', function (done) {
        request(app)
            .get('/admin')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    });
});

describe('GET /admin', function () {
    it('responds with json', function (done) {
        request(app)
            .get('/admin')
            .auth('username', 'password')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    })
})

describe('POST /admins', function () {
    it('responds with json', function (done) {
        request(app)
            .post('/admins')
            .send({ name: 'john' })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err)
                done()
            })
    })
})



describe('POST /admin', function () {
    it('user.name should be an case-insensitive match for "fail"', function (done) {
        request(app)
            .post('/admin')
            .send('name=fail') // x-www-form-urlencoded upload
            .set('Accept', 'application/json')
            .expect(function (res) {
                res.body.id = 'some fixed id'
                res.body.name = res.body.name.toLowerCase()
            })
            .expect(
                200,
                {
                    id: 'some fixed id',
                    name: 'fail',
                },
                done
            )
    })
})

export {}
