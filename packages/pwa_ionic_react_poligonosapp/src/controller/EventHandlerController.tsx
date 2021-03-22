import L, { circle, CRS } from 'leaflet';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Toggle extends React.Component {
  constructor(isToggleOn:boolean,mymap:L.Map) {
    super(props);
    this.state = { isToggleOn: true, mymap : mymap };

    // Aqui utilizamos o `bind` para que o `this` funcione dentro da nossa callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);

 export default Toggle;