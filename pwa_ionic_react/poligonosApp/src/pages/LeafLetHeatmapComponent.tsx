 // import { Heatmap } from 'leaflet-heatmap';

 // import {Heatmap} from 'react-leaflet';

import React, { Component, useState } from 'react';

import fetch from 'node-fetch';
// import fileType from 'file-type';

import 'leaflet/dist/leaflet.css';

import CircularProgress from '@material-ui/core';

export default class LeafLetHeatmapComponent extends React.Component{

    constructor(props:any) {
        super(props);
        
    }

    render(){
        // eslint-disable-next-line react/jsx-no-undef
        return (
            <div>
                
<CircularProgress />
                
            </div>
        );


    }

}


