import { LeafletConsumer } from 'react-leaflet';
import React, { useContext } from 'react';
const MapContainer = require('react-leaflet');

import ReactDOM from 'react-dom';

const Placeholder : React.FC = () => {

  const MapContainerContextConsumer = React.createContext(LeafletConsumer);
  const valueConsumer = useContext(MapContainer);

  const MapContainerContext = React.createContext(MapContainer);
  const value = useContext(MapContainer);

  return (
    <p>
      Map of London.{' '}
      <noscript>You need to enable JavaScript to see this map.</noscript>
    </p>
  );
}

ReactDOM.render(<Placeholder/>, 
  document.getElementById('root')
  );

export default Placeholder;
