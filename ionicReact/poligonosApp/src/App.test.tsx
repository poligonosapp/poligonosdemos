import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// const store = mockStore(initialState);

test('renders without crashing', () => {
  const { baseElement } = render(<App />);
  expect(baseElement).toBeDefined();
});
