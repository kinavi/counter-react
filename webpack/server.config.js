const path = require('path');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const NodemonPlugin = require('nodemon-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
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
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]', // 'public/[contenthash].[ext]',
            outputPath: 'public/',
            publicPath: 'public/',
          },
        }],
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('./dist/public/styles.css'),
    new OptimizeCssAssetsPlugin(),
    new UglifyJsPlugin({
      sourceMap: true,
    }),
    new NodemonPlugin({
      script: './dist/index.js',
    }),
  ],
  devtool: 'inline-source-map',
});
