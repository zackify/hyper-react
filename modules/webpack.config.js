const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  context: resolve(__dirname, './modules'),

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ],

  performance: {
    hints: false,
  },
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8888',
    './render.js',
  ],
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname),
    publicPath: '/',
  },
  devtool: 'inline-eval-cheap-source-map',
};
