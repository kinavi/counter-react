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
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.tsx', '.ts', '.js'],
  },
  devtool: 'inline-source-map',
};
