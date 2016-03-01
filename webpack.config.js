var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public/js');
var APP_DIR = path.resolve(__dirname, 'entry');

var config = {
  entry: APP_DIR + '/app.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  devServer: {
  	inline: true,
  	port: 8888
  },
  resolve: {
    alias: {
      'react': path.join(__dirname, 'node_modules', 'react')
    },
    extensions: ['', '.js']
  },
  module: {
  	loaders: [
  	  {
  		test: /\.jsx?$/,
  		loader: 'babel-loader',
  		exclude: /node_modules/,
  		query: {
  			presets: ['es2015','react']
  		}
  	  }
  	]
  }

 };


module.exports = config;
