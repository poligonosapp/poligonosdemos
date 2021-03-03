import React, {Component} from 'react';

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

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';

class YourComponent extends Component{

    constructor(props:L.Map) {
        super(props);

        this.state = {

            try{
                mymap :  require('./controller/LeafletFrontend.ts').fun( (typeof L.Map)props.mymap );
            }catch(e){

        }

        }

    }

    render() {
        return <IonLabel>YourComponent

            try{

                {this.state.mymap}

            }catch(e){


                <Alert severity="warning">
                    <AlertTitle>Warning</AlertTitle>
                    This is a warning alert — <strong>check it out!</strong>
                </Alert>

            }




        </IonLabel>;
    }


}