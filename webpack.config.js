const path = require('path')                                                        // Path is already installed with nodeJS
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    entry: ['./index.js'],                                                          // if you don't have this file, please create
    output: {
        filename: '[name].[contenthash].js',                                        // It'll create a js file with hash (encryptation)
        path: path.resolve(__dirname, "dist"),                                      // This is the folder where we'll save the minification
        assetModuleFilename: 'assets/[hash][ext][query]'                            // Saves all the image files in assets foldere
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: "[name].[hash].css" }),                // This plugin saves all the css files in only 1 file
        new CleanWebpackPlugin(),                                                   // This plug in cleans up everytime the dist folder
        new HtmlWebpackPlugin({ template: './index.html' })                         // It indicates the html we gonna use an bundle css and js
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"]                                                 // Minificate all the HTML files
            },
            {
                test: /\.css$/i,                                                     // Minificate all the CSS files
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {},
                    },
                    'css-loader',                                                    // This library puts together all the imports and url that are in CSS files
                ],
            },
            {
                test: /\.(svg|png|jpg|gif)$/,                                        // This rule puts togeter all the image files
                type: 'asset/resource'
            }
        ],
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),                                                 // Minimices all CSS
            new TerserPlugin()                                                        // Minimices all JS
        ]
    },

}