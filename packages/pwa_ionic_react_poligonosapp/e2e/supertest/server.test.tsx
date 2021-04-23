const addHook = require('pirates').addHook;
// Or if you use ES modules
// import { addHook } from 'pirates';

require('babel-plugin-import-graphql');
const request = require("supertest");
const app = require("../../src/app");

describe("should e2e Test the root path", () => {
  test("It should response the GET method", done => {
    request(app)
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe('should e2e Test the addLike method', () => {

let mongoDB = require('mongodb');

    beforeAll(() => {
        mongoDB.connect();
    });

    afterAll((done) => {
        mongoDB.disconnect(done);
    });
});
