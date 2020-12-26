import { response } from "express";

let express = require("express");
let cors = require("cors");
let app = express();

module.exports = response.render;
export default response.render;
