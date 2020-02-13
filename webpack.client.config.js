const path = require('path');

// const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const {StatsWriterPlugin} = require('webpack-stats-plugin');
// const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/client.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'client.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',

      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '/',
            },
          },
          'css-loader'],
      },
      // {
      //   test: /\.(png|svg|jpg|gif)$/,
      //   use: [{loader: 'file-loader'}],

      //   // options:{
      //   //     name:'media/favicon.png',
      //   //     outputPath:'media'
      //   //   }

      // },

    ],
  },
  plugins: [

    // new webpack.IgnorePlugin(/jsdom$/),

    // new CompressionPlugin(),

    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: JSON.stringify('production'),
    //   },
    // }),
    // new StatsWriterPlugin({
    //   filename: '../stats.json',
    //   stats: {
    //     all: false,
    //     assets: true,

    //   },
    // }),
    new MiniCssExtractPlugin({
      filename: 'style.css', // "public/name.pp"
    }),

  ],
};
