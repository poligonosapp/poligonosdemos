// const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const PUBLIC_DIR = 'public';

const HTMLWebpackPlugin = require('html-webpack-plugin');

var PROD = '0';

// import FileBrowser from 'components/FileBrowser';

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = ({ mode }) => {

    const pathToMainCss = require.resolve("./src/theme/variables.css");


    if (mode === "production") {

        console.log('\nproduction mode\n');

    } else {
        console.log('\ndev mode\n');
    }

    return {
        mode,
        entry: pathToMainCss,
        devServer: {
            inline: false,
            contentBase: path.join(__dirname, PUBLIC_DIR),
            hot: true,
            compress: true,
            port: 3340
        },
         mode: 'development',
        devtool: "inline-source-map",
        entry: path.resolve(__dirname, 'src','index.js'),
        output: {
            filename: '[name]-[hash].js',
            path: path.resolve(__dirname, 'dist')
        },
        target: 'web'
        ,
        resolve: {
            // Add `.ts` and `.tsx` as a resolvable extension.
            extensions: [".ts", ".tsx", ".js", ".jsx"]
        },
        module: {
            rules: [
                {
                    test: pathToMainCss,
                    // loaders: loaders
                },
                // the 'transform-runtime' plugin tells Babel to
                // require the runtime instead of inlining it.
                {
                    test: /\.json5$/i,
                    loader: 'json5-loader',
                    type: 'javascript/auto',
                },
                {
                    test: /\.png$/,
                    use: [{ loader: 'file-loader'}]
                },
                {
                    test: /\.html$/,
                    use: [
                        { loader: 'file-loader' },
                        { loader: 'extract-loader' },
                        { loader: 'ref-loader' },
                    ]
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
                            loader: `val-loader`,
                        },
                    ],
                },
                {
                    test: /\.txt$/i,
                    use: 'raw-loader',
                },
                {
                    test: /\.m?js|jsx$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            modules: true,
                            presets: [
                                ['@babel/preset-env', { targets: "defaults" }]
                            ],
                            plugins: ['@babel/plugin-transform-runtime']
                        }
                    }
                },
                {
                    test: /\.m?js|jsx$/,
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
                    test: /\.m?js|jsx$/,
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
            new HTMLWebpackPlugin(
                {

                    template: path.resolve(__dirname, PUBLIC_DIR, 'index.html')

                }

            ),
            new webpack.HotModuleReplacementPlugin(),
            new CleanWebpackPlugin()
        ]
        ,
        optimization: {
            removeAvailableModules: false,
            removeEmptyChunks: false,
            splitChunks: false,
        }
    };
};
