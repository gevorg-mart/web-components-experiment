const webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  watch: true,
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    compress: true,
    contentBase: './dist',
  },
  output: {
    pathinfo: false,
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css',
    }),
    new webpack.NamedModulesPlugin(),
  ],
});
