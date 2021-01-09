const path = require('path');
// const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { StatsWriterPlugin } = require('webpack-stats-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./base.config');

module.exports = merge(baseConfig, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]', // 'public/[contenthash].[ext]',
            outputPath: './',
          },
        }],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CompressionPlugin(),
    new ExtractTextPlugin('style.css'),
    // new webpack.IgnorePlugin(/jsdom$/),
    // new HtmlWebPackPlugin({
    //   template: path.resolve(__dirname, '../', 'html', 'index.html'),
    //   title: 'Webpack server',
    // }),
    // new StatsWriterPlugin({
    //   filename: '../stats.json', // path.resolve(__dirname, 'dist', 'stats.json')
    //   stats: {
    //     all: false,
    //     assets: true,

    //   },
    // }),
  ],
});
