import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// const store = mockStore(initialState);

const makeServiceWorkerEnv = require('service-worker-mock');
const makeFetchMock = require('service-worker-mock/fetch');


test('renders without crashing', () => {
  const { baseElement } = render(<App />);
  expect(baseElement).toBeDefined();
});

test('shapefile types upload', () => {
  fail(true);
});

test('geojson types upload', () => {
  fail(true);
});