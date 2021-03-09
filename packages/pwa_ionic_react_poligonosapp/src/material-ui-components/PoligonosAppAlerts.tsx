import { Alert, AlertTitle } from '@material-ui/lab';

import React, { Component } from 'react';
 
// import { Badge } from '@material-ui/core';

import render from 'react-dom';

class PoligonosAppAlert extends Component{

  render(){
    return <Alert severity="warning">
     <AlertTitle>Warning</AlertTitle>
     This is a warning alert — <strong>check it out!</strong>
  </Alert>;
  }

};


module.exports = PoligonosAppAlert;
 
