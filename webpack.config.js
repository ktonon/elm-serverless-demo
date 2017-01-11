const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
  entry: [
    './api.js',
  ],
  noParse: /\.elm$/,
  target: 'node',

  output: {
    libraryTarget: 'commonjs',
    path: path.resolve(`${__dirname}/public`),
    filename: 'api.js',
  },

  module: {
    loaders: [
      {
        test: /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        loader: 'elm-webpack',
      },
    ],
  },
};
