import L from 'leaflet';

interface Coordenadas{
    x: []|'int[]',
    y: []|'int[]'
}

type PoligonoDesenho = {
    type: "Polygon",
    geometry: {
        type: "string",
        coordinates: "int[][][][]" | Coordenadas
    }
};



export default PoligonoDesenho;
