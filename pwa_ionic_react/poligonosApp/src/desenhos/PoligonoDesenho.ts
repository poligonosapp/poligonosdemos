//Require Mongoose
let mongoose = require('mongoose');

//Define a schema
let Schema = mongoose.Schema;

const PoligonoDesenho = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Polygon'],
    required: true
  },
  coordinates: {
    type: [[[Number]]], // Array of arrays of arrays of numbers
    required: true
  }
});

const CidadeDesenho = new mongoose.Schema({
  name: String,
  location: PoligonoDesenho
});

export default PoligonoDesenho;
