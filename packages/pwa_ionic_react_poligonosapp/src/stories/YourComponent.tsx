import { GeoJSON, Polygon, TileLayer } from 'react-leaflet';

import React, { Component } from 'react';

import render from 'react-dom';

import L from 'leaflet';

import {
    IonSpinner,
    IonApp,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonButton
} from '@ionic/react';

import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';

let $ = require('jquery');

 const position = [51.505, -0.09];

// import MapContainer from 'react-leaflet';



class YourComponent extends Component{

    constructor(props:L.Map) {
        super(props);

        this.state = {

            try{
                allData :  require('./controller/LeafletFrontend.ts').fun( (typeof L.Map) this.props.mymap );
            }catch(e){

                $.alert('realm connection failed');

        }

        }

    }

   

    render() {
        return <IonLabel>
            
            

            try{

                
                    <Polygon position={position} atribution="process.env.ATRIBUTION" URL="process.env.URL">
                        <GeoJSON atribution="process.env.ATRIBUTION" data={this.state.allData}/>
                    </Polygon>
                

            }catch(e){


                <Alert severity="warning">
                    <AlertTitle>Warning</AlertTitle>
                    This is a warning alert — <strong>check it out!</strong>
                </Alert>

            }




        </IonLabel>;
    }


}

// default export YourComponent;