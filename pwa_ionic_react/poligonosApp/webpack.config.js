const webpack = require("webpack"); //to access built-in plugins
const path = require("path");
const PUBLIC_DIR = "public";
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const mainCss = require("./css/main.css");

const prettier = require("prettier/standalone");
const plugins = [require("prettier/parser-graphql")];
prettier.format("type Query { hello: String }", {
  parser: "graphql",
  plugins,
});

// const fs = require('fs');

module.exports = () => {
  return {
	  module: {
    loaders: [
      {exclude: ['node_modules'], loader: 'babel', test: /\.jsx?$/},
      {loader: 'style-loader!css-loader', test: /\.css$/},
      {loader: 'url-loader', test: /\.gif$/},
      {loader: 'file-loader', test: /\.(ttf|eot|svg)$/},
    ],
  },
  resolve: {
    alias: {
      config$: './configs/app-config.js',
      react: './vendor/react-master',
    },
    extensions: ['', 'js', 'jsx'],
    modules: [
      'node_modules',
      'bower_components',
      'shared',
      '/shared/vendor/modules',
	  'fs',
	  'mime',
    ],
  },
    mode: 'production',
    devServer: {
      inline: false,
      contentBase: path.join(__dirname, PUBLIC_DIR),
      hot: true,
      compress: true,
      port: 3000,
    },
    devtool: "inline-source-map",
    entry: {
      app: './app.js',
      adminApp: './adminApp.js'
    },
    output: {
      libraryTarget: 'system',
      publicPath: "",
      filename: "[name]-[hash].js",
      path: path.resolve(__dirname, "dist"),
    },
    target: "web",
    resolve: {
      alias: {
        config$: './configs/app-config.js',
        react: './vendor/react-master',
      },
      extensions: [".ts", ".tsx", ".js", ".jsx",".css",".sass",".less",".scss",".json",".html",".png",".geojson",".gif"],
      fallback: {
        "path": require.resolve("path-browserify"),
        "http": require.resolve("stream-http"),
        "crypto": require.resolve("crypto-browserify")
      }
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.sss$/i,
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: [
                "postcss-import",
                ["postcss-short", { prefix: "x" }],
                // require.resolve("my-postcss-plugin"),
                // myOtherPostcssPlugin({ myOption: true }),
                // Deprecated and will be removed in the next major release
                { "postcss-nested": { preserveEmpty: true } },
              ],
            },
          },
        },
        {
        test: /\.s[ac]ss$/i,
        use: [
          "css-loader",
          "sass-loader",
        ],
      },
        {
          test: /\.json5$/i,
          loader: "json5-loader",
          type: "javascript/auto",
        },
        {
          test: /\.png$/,
          use: [{ loader: "file-loader" }],
        },
        {
          test: /\.html$/,
          use: [
            { loader: "file-loader" },
            { loader: "extract-loader" },
            { loader: "ref-loader" },
          ],
        },
        {
          test: /\.(png|jpg|gif)$/i,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 8192,
              },
            },
          ],
        },
        {
          test: /target-file.js$/,
          use: [
            {
              loader: `val-loader`,
            },
          ],
        },
        {
          test: /\.txt$/i,
          use: "raw-loader",
        },
        {
          test: /\.jsx?$/,
          loader: "babel-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.m?js|jsx$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              plugins: ["@babel/plugin-proposal-object-rest-spread"],
            },
          },
        },
        {
          test: /\.m?js|jsx$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
        { test: /\.css$/, use: "css-loader" },
        { test: /\.ts$/, use: "ts-loader" },
        {
          test: /\.css$/,
          use: [
            // [style-loader](/loaders/style-loader)
            { loader: "style-loader" },
            // [css-loader](/loaders/css-loader)
            {
              loader: "css-loader",
              options: {
                modules: true,
              },
            },
            // [sass-loader](/loaders/sass-loader)
            { loader: "sass-loader" },
          ],
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
        { test: /\.txt$/, use: "raw-loader" },
        { test: /\.txt$/, use: "raw-loader" },
        {
          test: /\.(png|jpe?g|gif|json|geojson)i$/,
          use: [{ loader: "file-loader" }],
        },
      ],
    },

    plugins: [
	new BundleAnalyzerPlugin(),
	new DashboardPlugin(),
      new MiniCssExtractPlugin(),
      new HTMLWebpackPlugin({
        template: path.resolve(__dirname, PUBLIC_DIR, "index.html"),
      }),
      new webpack.HotModuleReplacementPlugin(),
      new CleanWebpackPlugin(),
    ],
    optimization: {
      removeAvailableModules: false,
      removeEmptyChunks: false,
      splitChunks: false,
    },
  };
};
