const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const htmlMinifierObj = {
  collapseWhitespace: true,
  removeComments: true
}


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
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
           'file-loader'
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
    })
  ]
};