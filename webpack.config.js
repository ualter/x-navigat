const path = require('path');
const fs   = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

const htmlMinifierObj = {
  collapseWhitespace: true,
  removeComments: true
}

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  entry: {
    front: './src/index-front.js',
    back: './src/index-back.js'
  },
  target: 'node',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
     rules: [
       {
         test: /\.css$/,
         include: [
            path.resolve(__dirname, './src/css')
         ],
         use: [
             'style-loader',
             'css-loader'
         ]
       },
       {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           'file-loader',
         ]
       }
     ]
  },
  devtool: 'inline-source-map',
  devServer: {
     contentBase: './dist',
     port: 9000
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'X-Navigat',
      template: './src/html/my-index.ejs',
      inject: false
    }),
    new CopyWebpackPlugin([
      { from: './src/js/libs', to: 'libs' },
      { from: './src/images', to: 'images' },
    ])
  ],
  externals: nodeModules
};