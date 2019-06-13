
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = async (env, options) => {
    const dev = options.mode === "development";

    const config = {
        mode: "development",
        optimization: {
            minimize: false
        },
        devtool: "source-map",
        entry: {
            app: ['./src/index.tsx']
            //,vendor: ['react', 'react-dom']
        }
        , resolve: {
            extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.html', '.css']
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    use: [
                        'react-hot-loader/webpack',
                        'ts-loader'
                    ]
                    , exclude: /node_modules/
                },
                { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        use: {
                            loader: 'css-loader',
                            options: {
                                minimize: true
                            }
                        }
                    })
                },
                {
                    test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                    use: {
                        loader: 'file-loader',
                        query: {
                            name: 'src/assets/[name].[ext]'
                        }
                    }
                }
            ],

        },
        /*// When importing a module whose path matches one of the following, just
        // assume a corresponding global variable exists and use that instead.
        // This is important because it allows us to avoid bundling all of our
        // dependencies, which allows browsers to cache those libraries between builds.
        externals: {
            "react": "React",
            "react-dom": "ReactDOM"
        },*/
        plugins: [
            new CleanWebpackPlugin.CleanWebpackPlugin({ cleanAfterEveryBuildPatterns: ['dist'] }),
            new CopyWebpackPlugin([
                {
                    to: path.resolve(__dirname, 'dist'),
                    from: "./src/index.css"
                }
            ]),

            new HtmlWebpackPlugin({
                filename: "index.html",
                template: './src/index.html'
                , chunks: ['app']

            }),
            //new ExtractTextPlugin('[name].[hash].css'),
            new ExtractTextPlugin({
                filename: '[name].[hash].css'
            })

            , new webpack.HotModuleReplacementPlugin()
        ],
        devServer: {
            headers: {
                "Access-Control-Allow-Origin": "*"
            },

            port: process.env.npm_package_config_dev_server_port || 3001
        }
    }
    return config;
}
