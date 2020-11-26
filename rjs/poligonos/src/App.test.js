import { render, screen } from '@testing-library/react';
import App from './App';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import {shallow} from 'enzyme';

const initialState = {
  poligonos: [
    {type: "Polygon"},
    {coordinates: []}
  ]
};

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
