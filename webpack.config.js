const path = require('path');
const webpack = require('webpack');
const slsw = require('serverless-webpack');

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
  // Bridge is written for node 6.10. While AWS Lambda supports it
  // the UglifyJsPlugin does not :( so until that happens we use babel.
  config.module.rules.push({
    test: /\.js$/,
    exclude: [/elm-stuff/, /node_modules/],
    use: [
      {
        loader: 'babel-loader',
        options: { presets: 'env' }
      }
    ]
  });

  config.plugins = config.plugins || [];
  config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = config;
