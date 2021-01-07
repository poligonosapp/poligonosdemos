const express = require('express');
let cors = require('cors')
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
app.use(cors);
const config = require('./webpack.config.js');
const compiler = webpack(config);

app.use(cors())
app.use(logger('dev'))

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);

// Serve the files on port 3000.
app.listen(3000, function () {
  console.log('webpack dev middleware listening...');
  console.log('Example app listening on port 3000!\n');
});