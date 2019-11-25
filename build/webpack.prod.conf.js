"use strict";
const MODE = process.env.NODE_ENV || "production"; //命令行传入用于设置webpack mode + process.env.node_env
const webpack = require("webpack");
const merge = require("webpack-merge"); // webpack merge 工具包
const baseWebpackConfig = require("./webpack.base.conf"); // 基础配置引入
const UglifyJsPlugin = require("uglifyjs-webpack-plugin"); // js压缩优化配置
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 提取单独打包css文件
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const cleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CssCustomSourcemapUrlPlugin = require("css-custom-sourcemap-url-plugin");

const config = require("../config");

const prodWebpackConfig = merge(baseWebpackConfig, {
  mode: MODE, // 设定环境
  optimization: {
    // webpack4.0 新加优化策略
    minimizer: [
      new UglifyJsPlugin({
        parallel: true, // 开启并行压缩，充分利用cpu
        extractComments: false, // 移除注释
        sourceMap: true,
        cache: true,
        uglifyOptions: {
          compress: {
            warnings: false,
            drop_debugger: true,
            drop_console: true
          }
        }
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          map: {
            inline: false
          },
          autoprefixer: false
        }
      }),
      new CssCustomSourcemapUrlPlugin({
        append: config.build.sourcePath
      })
    ],
    splitChunks: {
      chunks: "all",
      name: "vendors"
    },
    runtimeChunk: {
      name: "manifest"
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(MODE)
      }
    }),
    new cleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "../static"),
        to: config.build.assetsSubDirectory,
        ignore: [".*"]
      }
    ]),
    // css 提取
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:7].css",
      chunkFilename: "css/[id].[contenthash:7].css",
      sourceMap: true
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: "[file].map",
      append: `\n//# sourceMappingURL=${config.build.sourcePath}[url]`
    })
  ]
});

module.exports = prodWebpackConfig;
