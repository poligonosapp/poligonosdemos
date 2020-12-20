import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

// const store = mockStore(initialState);

const makeServiceWorkerEnv = require("service-worker-mock");
const makeFetchMock = require("service-worker-mock/fetch");

// babel loader
require("@babel/core").transform("code", {
  plugins: ["@babel/plugin-transform-modules-amd"],
});

require("@babel/core").transform("code", {
  plugins: ["@babel/plugin-transform-modules-commonjs"],
});

require("@babel/core").transform("code", {
  plugins: ["@babel/plugin-transform-modules-systemjs"],
});

require("@babel/core").transform("code", {
  plugins: ["@babel/plugin-transform-modules-umd"],
});

require("babel-plugin-relay").transform("code", {
  plugins: ["babel-plugin-relay"],
});

require("graphql").transform("code", {
  plugins: ["graphql"],
});

require("core-js/es6/map");
require("core-js/es6/set");
require("core-js/es6/promise");
require("core-js/es6/object");

require("./myRelayApplication");

require("./react-leafet");

test("renders without crashing", () => {
  const { baseElement } = render(<App />);
  expect(baseElement).toBeDefined();
});

test("shapefile types upload", () => {
  // fail(true);
});

test("geojson types upload", () => {
  // fail(true);
});

test("should webpack loaders webkit dev tools FOUC flash of unstyled text", () => {});

test("webpack babel loaders post css", () => {
  // fail(true);
});

test("nodemom express", () => {
  // fail(true);
});

test("should useState", () => {
  const { baseElement } = render(<App />);
  // expect(baseElement).toBeDefined();
  fail(true);
});

test("should render props relay", () => {
  const { baseElement } = render(<App />);
  // expect(baseElement).toBeDefined();
  fail(true);
});
