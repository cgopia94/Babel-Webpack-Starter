var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './dev/js/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/main.bundle.js'
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'css/main.css'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.scss/,
        loader: ExtractTextPlugin.extract({
          use: ['css-loader?url=false', 'sass-loader']
        })
      }
    ]
  },
  stats: {
    colors: true
  },
  devServer: {
    inline: true,
    contentBase: './build',
    port: 3001,
    host: '0.0.0.0'
  },
  devtool: 'source-map'
};