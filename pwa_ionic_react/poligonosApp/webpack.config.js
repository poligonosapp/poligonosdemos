const webpack = require('webpack')
const path = require('path')
const PUBLIC_DIR = 'public'

const HTMLWebpackPlugin = require('html-webpack-plugin')

// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin

const mainCss = require('./css/main.css')

const prettier = require('prettier/standalone')
const plugins = [require('prettier/parser-graphql')]
prettier.format('type Query { hello: String }', {
    parser: 'graphql',
    plugins,
})

const WorkboxPlugin = require('workbox-webpack-plugin')

// const path = require('path');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const TerserPlugin = require('terser-webpack-plugin')

// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackManifestPlugin = require('webpack-manifest-plugin')
const options = {  }
//modern javascript google developers
const OptimizePlugin = require('optimize-plugin')
const BabelEsmPlugin = require('babel-esm-plugin')
const ModernNpmPlugin = require('webpack-plugin-modern-npm')

//server.js
//const webpackDevMiddleware = require('webpack-dev-middleware');

const argv = require('webpack-nano/argv');

const { source } = argv;

const rollupPluginReplace = require('rollup-plugin-replace')({
    'process.env.NODE_ENV': JSON.stringify('production')
  });
  const rollupPluginCommonjs = require('rollup-plugin-commonjs')();
   const rollupPluginTerser = require('rollup-plugin-terser')();

module.exports = () => {
    return {
        module: {
            loaders: [
                { exclude: ['node_modules'], loader: 'babel', test: /\.jsx?$/ },
                { loader: 'style-loader!css-loader', test: /\.css$/ },
                { loader: 'url-loader', test: /\.gif$/ },
                { loader: 'file-loader', test: /\.(ttf|eot|svg)$/ },
            ],
        },
        resolve: {
            alias: {
                config$: './configs/app-config.js',
                react: './vendor/react-master',
            },
            extensions: ['', 'js', 'jsx'],
            modules: [
                '/node_modules/sqlite3/lib/binding/',
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
        devtool: 'inline-source-map',
        entry: {
            app: ['./app.js'],
            admin: ['./adminApp.js'],
        },
        output: {
            libraryTarget: 'system',
            publicPath: '',
            filename: '[name]-[hash].js',
            path: path.resolve(__dirname, 'dist'),
            module: true,
            publicPath: '/',
        },
        experiments: {
            outputModule: true,
        },
        target: ['web', 'es2017'],
        resolve: {
            alias: {
                config$: './configs/app-config.js',
                react: './vendor/react-master',
            },
            extensions: [
                '.ts',
                '.tsx',
                '.js',
                '.jsx',
                '.css',
                '.sass',
                '.less',
                '.scss',
                '.json',
                '.html',
                '.png',
                '.geojson',
                '.gif',
            ],
            fallback: {
                path: require.resolve('path-browserify'),
                http: require.resolve('stream-http'),
                crypto: require.resolve('crypto-browserify'),
            },
        },
        module: {
            rules: [
                {
                    test: require.resolve("underscore"),
                    loader: "expose-loader",
                    options: {
                      exposes: [
                        "_.map map",
                        {
                          globalName: "_.filter",
                          moduleLocalName: "filter",
                        },
                        {
                          globalName: ["_", "find"],
                          moduleLocalName: "myNameForFind",
                        },
                      ],
                    },
                  },
                {
                    test: require.resolve("jquery"),
                    loader: "expose-loader",
                    options: {
                      exposes: "jquery",
                    },
                  },
                {
                    test: require.resolve("jquery"),
                    loader: "expose-loader",
                    options: {
                      exposes: ["$", "jQuery"],
                    },
                  },
                  {
                    test: require.resolve("underscore"),
                    loader: "expose-loader",
                    options: {
                      exposes: [
                        "_.map|map",
                        {
                          globalName: "_.reduce",
                          moduleLocalName: "reduce",
                        },
                        {
                          globalName: ["_", "filter"],
                          moduleLocalName: "filter",
                        },
                      ],
                    },
                  },
                {
                    test: /\.md$/,
                    loader: 'babel!react-markdown',
                },
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'awesome-typescript-loader',
                    },
                },
                {
                    test: /\.sss$/i,
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: [
                                'postcss-import',
                                ['postcss-short', { prefix: 'x' }],
                                { 'postcss-nested': { preserveEmpty: true } },
                            ],
                        },
                    },
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: ['css-loader', 'sass-loader'],
                },
                {
                    test: /\.json5$/i,
                    loader: 'json5-loader',
                    type: 'javascript/auto',
                },
                {
                    test: /\.png$/,
                    use: [{ loader: 'file-loader' }],
                },
                {
                    test: /\.html$/,
                    use: [
                        { loader: 'file-loader' },
                        { loader: 'extract-loader' },
                        { loader: 'ref-loader' },
                    ],
                },
                {
                    test: /\.(png|jpg|gif)$/i,
                    use: [
                        {
                            loader: 'url-loader',
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
                            loader: 'val-loader',
                        },
                    ],
                },
                {
                    test: /\.txt$/i,
                    use: 'raw-loader',
                },
                {
                    test: /\.js$|jsx$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                            plugins: [
                                '@babel/plugin-proposal-object-rest-spread',
                            ],
                        },
                    },
                },
                { test: /\.css$/, use: 'css-loader' },
                { test: /\.ts$/, use: 'ts-loader' },
                {
                    test: /\.css$/,
                    use: [
                        { loader: 'style-loader' },
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                            },
                        },
                        { loader: 'sass-loader' },
                    ],
                },
                {
                    test: /\.css$/i,
                    use: [MiniCssExtractPlugin.loader, "style-loader", "css-loader", "postcss-loader"],
                },
                { test: /\.txt$/, use: 'raw-loader' },
                {
                    test: /\.(png|jpe?g|gif|json|geojson)i$/,
                    use: [{ loader: 'file-loader' }],
                },
            ],
        },
        entry: './src/index.js',
        output: {
            path: __dirname + '/dist',
            filename: 'index_bundle.js',
        },
        plugins: [
            new rollupPluginReplace(),
            new rollupPluginCommonjs(),
            new rollupPluginTerser(),
            new webpack.ProvidePlugin({ 
                $: 'jquery', 
                jQuery: 'jquery',
                'window.jQuery': 'jquery'
            }),
            new ModernNpmPlugin(),
            new BabelEsmPlugin(),
            new OptimizePlugin(),
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                attributes: {
                    id: 'target',
                    'data-target': 'example',
                },
                insert: function (linkTag) {
                    var reference = document.querySelector('#some-element')
                    if (reference) {
                        reference.parentNode.insertBefore(linkTag, reference)
                    }
                },
                filename: '[name]-[contenthash].css',
            }),
            // new UglifyJsPlugin(),
            new BundleAnalyzerPlugin(),
            new DashboardPlugin(),
            new HTMLWebpackPlugin({
                template: path.resolve(__dirname, PUBLIC_DIR, 'index.html'),
                title: 'Progressive Web Application',
            }),
            new WorkboxPlugin.GenerateSW({
                // these options encourage the ServiceWorkers to get in there fast
                // and not allow any straggling "old" SWs to hang around
                clientsClaim: true,
                skipWaiting: true,
            }),
            new webpack.HotModuleReplacementPlugin(),
        ],
        optimization: {
            minimize: true,
            minimizer: [
                 // new UglifyJsPlugin(),
                // new OptimizeCSSAssetsPlugin({}),
                new TerserPlugin({
                    terserOptions: {
                      myCustomOption: false,
                    },
                    // Can be async
                    minify: (file, sourceMap, minimizerOptions) => {
                      // The `minimizerOptions` option contains option from the `terserOptions` option
                      // You can use `minimizerOptions.myCustomOption`
                      const extractedComments = [];
            
                      
            
                      return { extractedComments };
                    },
                  }),//npx wp
            ],
            splitChunks: {
                chunks: 'all',
            },
            removeAvailableModules: false,
            removeEmptyChunks: false,
        },
    }
}
