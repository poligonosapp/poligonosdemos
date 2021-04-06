import PoligonoDesenho from './poligono';

import L, { circle, polygon , CRS } from 'leaflet';
import * as process from "process";

export interface IProps{
// @ts-ignore
  polygonData: polygon;
}