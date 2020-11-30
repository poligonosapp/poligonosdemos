// const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

module.exports = {
    mode: 'development',
	devtool: "inline-source-map",
    entry: './src/index.tsx',
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
    module: {
    rules: [
        // the 'transform-runtime' plugin tells Babel to
        // require the runtime instead of inlining it.
        {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/plugin-transform-runtime']
                }
            }
        },
        {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/plugin-proposal-object-rest-spread']
                }
            }
        },
        {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },
	{ test: /\.css$/, use: 'css-loader' },
	{ test: /\.ts$/, use: 'ts-loader' },
	{
        test: /\.css$/,
        use: [
          // [style-loader](/loaders/style-loader)
          { loader: 'style-loader' },
          // [css-loader](/loaders/css-loader)
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          // [sass-loader](/loaders/sass-loader)
          { loader: 'sass-loader' }
        ]
      },{
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
        { test: /\.txt$/, use: 'raw-loader' },
        { test: /\.txt$/, use: 'raw-loader' },
        { test: /\.(png|jpe?g|gif|json|geojson)i$/, use: [{loader: 'file-loader',},],},
    ]
},
    plugins: [
       // new HtmlWebpackPlugin({template: './src/index.html'})
    ]
    ,
  devServer: {
	inline: false,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
};
