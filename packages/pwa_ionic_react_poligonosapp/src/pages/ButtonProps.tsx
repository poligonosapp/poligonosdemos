import Toggle from './controller/EventHandlerController';
require('./pages/oneGeoJSON');
import L from 'leaflet';
import React, { Suspense } from 'react';
import { PoligonoDesenho } from './models/poligono';

interface Props {
// any other props that come into the component, you don't have to explicitly define children.
  pd: PoligonoDesenho;
}

class ButtonProps extends React.Component implements Props{

    
  constructor(isToggleOn: boolean, mymap: L.Map) {
      super(props);
        this.state = { isToggleOn: true, mymap : mymap };
    }
    pd: any;
}

const Button: React.FC<Props> = ({ children, ...props }) => {

  let map = L.map('mapid').setView([51.505, -0.09], 13);

  // map.setView(pd);

  return (
    
    
      <Suspense fallback={<div>Loading...</div>}>
      
      <Button {...props}>
        {children}
        
<Toggle this.state.isToggleOn=true this.state.mymap />
                
                <Toggle this.state.isToggleOn=true  this.state.allData />

    </Button>
      
      </Suspense>
      
      
      
  );
};
 

export default ButtonProps;