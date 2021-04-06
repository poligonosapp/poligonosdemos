import { useAuth0 } from "@auth0/auth0-react";

import React, { Component } from 'react';

import { render } from 'react-dom';

const { logout } = useAuth0();

interface IProps{

}
class LogoutButton extends React.Component {

  constructor(props: IProps) {
    super(props);

  }
  

  render(){
    return (
    <button onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
  );
  }
};

export default LogoutButton;