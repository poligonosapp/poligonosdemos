const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
})
