"use strict";
const MODE = process.env.NODE_ENV || "development";
const webpack = require("webpack");
const config = require("../config");
const merge = require("webpack-merge");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const baseWebpackConfig = require("./webpack.base.conf");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const cleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 提取单独打包css文件

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: MODE, // 设定环境
  devtool: config.dev.devtool,
  optimization: {
    splitChunks: {
      chunks: "all",
      name: "vendors"
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "index.html"
    }),
    //配置环境变量
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(MODE)
      }
    }),
    new cleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "../static"),
        to: config.dev.assetsSubDirectory,
        ignore: [".*"]
      }
    ]),
    // css 提取
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:7].css",
      chunkFilename: "css/[id].[contenthash:7].css",
      sourceMap: true
    }),
    new webpack.SourceMapDevToolPlugin() // https://github.com/webpack-contrib/mini-css-extract-plugin/issues/29
  ]
});

module.exports = devWebpackConfig;
