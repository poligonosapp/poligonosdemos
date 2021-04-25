import { ApolloProvider } from '@apollo/client';

let polygons = require('polygons.geojson');
console.log('\n polygons size \n');
console.log(polygons.size());

import { GeoJSON, Polygon, TileLayer, Pane, Popup, Marker } from 'react-leaflet';

import DrawComponent from './DrawComponent';

import ErrorBoundary from './ErrorBoundary';

import { ReactReduxContext } from 'react-redux';

import React, {
    FC,
    useState,
    useEffect,
    useReducer,
    FormEvent,
    useRef,
    Component,
    useCallback,
    Suspense,
} from 'react';

import {
    IonSpinner,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonInput,
    IonButton,
} from '@ionic/react';

interface IProps {
    
}

class OtherComponent extends React.Component {
    constructor(props: IProps) {
        super(props)
    }

    render() {
        return (
            <ReactReduxContext.Consumer>
                {({ store: [] }) => {
                    ;<IonPage>
                        <IonHeader>
                            <IonToolbar>
                                <IonTitle>Tab 1</IonTitle>
                            </IonToolbar>
                        </IonHeader>
                        <IonContent fullscreen>
                            <IonSpinner />
                            <IonHeader collapse="condense">
                                <IonToolbar>
                                    <IonTitle size="large">Tab 1</IonTitle>
                                </IonToolbar>
                            </IonHeader>

                            <ErrorBoundary>
                                <Polygon
                                    pathOptions={{ color: 'purple' }}
                                    positions={polygons}
                                />
                                <Polygon
                                    pathOptions={{ color: 'purple' }}
                                    positions={[
                                        [
                                            [51.51, -0.12],
                                            [51.51, -0.13],
                                            [51.53, -0.13],
                                        ],
                                        [
                                            [51.51, -0.05],
                                            [51.51, -0.07],
                                            [51.53, -0.07],
                                        ],
                                    ]}
                                />
                            </ErrorBoundary>

                            <DrawComponent />

                            <ApolloProvider client={client}>
                                <div>
                                    <h2> Polígonos App 🚀</h2>
                                </div>
                                <div>
                                    <h2> Polígonos App 🚀</h2>
                                </div>
                            </ApolloProvider>
                        </IonContent>
                    </IonPage>
                }}
            </ReactReduxContext.Consumer>
        )
    }
}

export default OtherComponent;
