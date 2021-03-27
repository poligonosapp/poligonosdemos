const { merge } = require('webpack-merge');
 const common = require('./webpack.common.ts');

const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");

 module.exports = merge(common, {
   mode: 'development',
   devtool: 'source-map',
   entry: {
     app: __dirname + "/index.js",
   },
   module: {
     rules: [
       {
         test: /\.js$/,
         exclude: /node_modules/,
         loaders: ["babel-loader"],
       },
     ],
   },
   output: {
     path: __dirname + "/build/",
     filename: "[name].js",
     publicPath: "http://localhost:8000/build",
   },
   plugins: [
     new LodashModuleReplacementPlugin(),
     new webpack.HotModuleReplacementPlugin(),
   ],
   devServer: {
     contentBase: './dist',
     historyApiFallback: true,
     hot: true,
     inline: true,
     port: 8001,
     progress: true,
     stats: {
       cached: false,
     },
   },
 });