// import { EditControl } from "react-leaflet-draw";

import React, {
    FC,
    useState,
    useEffect,
    useReducer,
    FormEvent,
    useRef,
    Component,
} from 'react'

import {
    Map,
    TileLayer,
    FeatureGroup,
    Circle,
    Polygon,
    GeoJSON,
    Pane,
    Popup,
    Marker,
} from 'react-leaflet'
// import { EditControl } from "react-leaflet-draw";
// import { Map, TileLayer, FeatureGroup, Circle } from 'react-leaflet';
// import { EditControl } from "react-leaflet-draw";

// import 'DrawComponet.css-FUNnnQD3';

import 'leaflet/dist/leaflet.css'
// import 'leaflet-draw/dist/leaflet.draw.css-FUNnnQD3';

interface IProps {
  list: string | any[];
  listRef: typeof React;
}

const listRef = React.createRef();

class DrawComponent extends Component {

    constructor(props: IProps) {
      super(props);
    }

    render() {
        const position = [51.505, -0.09]

        const [allData] = useState(require('./polygons.geojson'))

        return (
            <div>
                {/* ...contents... */}
                <FeatureGroup>
                    <Circle center={[51.51, -0.06]} radius={200} />
                    <Pane name="custom" style={{ zIndex: 100 }}>
                        <Polygon
                            positions={position}
                            atribution="process.env.ATRIBUTION"
                            URL="process.env.URL"
                        >
                            {allData}
                        </Polygon>
                    </Pane>
                </FeatureGroup>
            </div>
        )
    }
}

export default DrawComponent;
