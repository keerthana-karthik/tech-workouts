var path = require('path');

module.exports = {
  entry: {
    javascript: "./index.js",
    html: "./index.html"
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/, 
        loader: "eslint-loader", 
        exclude: /node_modules/
      }
    ],
    loaders: [
      { 
        test: /\.html/, 
        loader: 'file?name=[name].[ext]' 
      },
      {
        test: '/\.css/',
        loader: 'style!css'
      }, { 
        test: /\.js$/, 
        loaders: ['react-hot', 'babel-loader'], 
        exclude: /node_modules/ 
      }
    ]
  }
}