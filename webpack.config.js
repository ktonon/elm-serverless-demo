const path = require('path');
const webpack = require('webpack');
const slsw = require('serverless-webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = {
  entry: slsw.lib.entries,
  target: 'node', // Ignores built-in modules like path, fs, etc.

  output: {
    libraryTarget: 'commonjs',
    path: path.resolve(`${__dirname}/.webpack`),
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        // Compiles elm to JavaScript.
        test: /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        use: [
          {
            loader: 'elm-webpack-loader'
          }
        ]
      }
    ]
  },
};

if (process.env.NODE_ENV === 'production') {
  config.plugins = config.plugins || [];
  config.plugins.push(new UglifyJsPlugin());
}

module.exports = config;
