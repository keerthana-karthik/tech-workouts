var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './index',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: '/\.css/',
        loader: 'style!css'
      }, { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
    ]
  }
}