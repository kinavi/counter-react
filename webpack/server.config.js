const path = require('path');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const NodemonPlugin = require('nodemon-webpack-plugin');
const baseConfig = require('./base.config');

module.exports = merge(baseConfig, {
  target: 'node',
  entry: path.resolve(__dirname, '../', 'src', 'server', 'index.tsx'),
  externals: [nodeExternals({
    whitelist: [/\.(?!(?:jsx?|json)$).{1,5}$/i],
  })],
  output: {
    path: path.resolve(__dirname, '../', 'dist'),
    filename: 'index.js',

  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        loader: 'ignore-loader',
      },
    ],
  },
  plugins: [
    new NodemonPlugin(),
  ],
  devtool: 'inline-source-map',
});
