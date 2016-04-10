var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: __dirname + '/src',
  entry: {
    javascript: './index.js',
    html: './index.html'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    root: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'data/'),
        to: path.resolve(__dirname, 'dist/data')
      }
    ])
  ],
  module: {
    preLoaders: [
      {
        test: /\.js$/, 
        loader: 'eslint-loader', 
        exclude: /node_modules/
      }
    ],
    loaders: [
      { 
        test: /\.html/, 
        loader: 'file?name=[name].[ext]' 
      }, {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }, {
        test: '/\.css/',
        loader: 'style!css'
      }, { 
        test: /\.js$/, 
        loaders: ['react-hot', 'babel-loader'], 
        exclude: /node_modules/ 
      }, {
        test: /\.(woff2?|svg)$/,
        loader: 'url?limit=10000'
      }, {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=8192'
      }, {
        test: /\.(ttf|eot)$/,
        loader: 'file'
      }
    ]
  }
}