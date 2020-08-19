const path = require('path');

module.exports = {
  entry: ['@babel/polyfill', path.resolve(__dirname, '../', 'src', 'client', 'index.tsx')],
  output: {
    path: path.resolve(__dirname, '../', 'dist', 'public'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loader: 'file-loader',
        options: {
          name: 'public/[contenthash].[ext]',
          // outputPath: 'public',
        },
        //   'file-loader',
        //   // {
        //   //   loader: 'image-webpack-loader',
        //   //   options: {
        //   //     // bypassOnDebug: true, // webpack@1.x
        //   //     // disable: true, // webpack@2.x and newer
        //   //     // name: 'public/[contenthash].[ext]',
        //   //     // outputPath: 'public',
        //   //   },
        //   // },
        // ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.tsx', '.ts', '.js'],
  },
  devtool: 'inline-source-map',
};
