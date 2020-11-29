const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.tsx',
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
    rules: [
        { test: /\.txt$/, use: 'raw-loader' },
        { test: /\.txt$/, use: 'raw-loader' },
        {
            test: /\.(png|jpe?g|gif|json|geojson)$/i,
            use: [
                {
                    loader: 'file-loader',
                },
            ],
        },
    ]
},
    node: {
        Buffer: false,
        process: false
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'})
    ]
    ,
  devServer: {
	inline: false,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};
