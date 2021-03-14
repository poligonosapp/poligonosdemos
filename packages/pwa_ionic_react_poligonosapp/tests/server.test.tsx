const request = require("supertest");
const app = require("../../src/app");

describe("Test the root path", () => {
  test("It should response the GET method", done => {
    request(app)
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe('Test the addLike method', () => {

let mongoDB = require('mongodb');

    beforeAll(() => {
        mongoDB.connect();
    });

    afterAll((done) => {
        mongoDB.disconnect(done);
    });
});

let mongoose = require('mongoose');

module.exports = {
  mongoose,
  connect: () => {
    mongoose.Promise = Promise;
    mongoose.connect(process.env.CONNECT);
  },
  disconnect: done => {
    mongoose.disconnect(done);
  }
};