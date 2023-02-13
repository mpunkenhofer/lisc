const commonConfig = require('./webpack.common');
const path = require('path');
const {merge} = require('webpack-merge');
//const webpack = require('webpack');
//const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(commonConfig, {
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    //compress: true,
    port: 9000,
    hot: true,
    historyApiFallback: true, //this makes client side routing possible
    devMiddleware: {
      publicPath: '/',
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': '*',
    },
  },
  devtool: 'source-map',
  // plugins: [new webpack.HotModuleReplacementPlugin()],
});
