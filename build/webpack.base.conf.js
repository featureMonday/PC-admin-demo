"use strict";
const webpack = require("webpack");
const config = require("../config");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const depsPlugin = require("extract-dependency-manifest-plugin");
const path = require("path");
const isProduction = process.env.NODE_ENV === "production";
const isDevelopment = process.env.NODE_ENV === "development";
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 提取单独打包css文件
const WriteJsonPlugin = require('write-json-webpack-plugin');
// 引入插件
var vConsolePlugin = require("vconsole-webpack-plugin");

// 接收运行参数
const argv = require("yargs").describe("debug", "debug 环境").argv; // use 'webpack --debug'

const plugins = [];

console.log("Building on *---" + process.env.NODE_ENV + "---* MODE");

function resolve(dir) {
  return path.join(__dirname, "..", dir);
}

module.exports = {
  context: path.resolve(__dirname, "../"),
  entry: {
    app: "./src/main.js"
  },
  output: {
    path: config.build.assetsRoot,
    filename:
      isProduction || isDevelopment
        ? "js/[name].[contenthash:7].js"
        : "js/[name].js",
    chunkFilename:
      isProduction || isDevelopment
        ? "js/[name].[contenthash:7].js"
        : "js/[name].js",
    publicPath: isProduction
      ? config.build.assetsPublicPath
      : isDevelopment
        ? config.dev.assetsPublicPath
        : config.local.assetsPublicPath
  },
  resolve: {
    extensions: [".js", ".vue", ".json", ".less"],
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "@": resolve("src")
    }
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(vue|js)$/,
        loader: "eslint-loader",
        exclude: /node_modules/,
        include: resolve("src")
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        exclude: /node_modules/,
        include: resolve("src")
      },
      {
        test: /\.js$/,
        use: isProduction
          ? [
              {
                loader: "cache-loader",
                options: {
                  cacheDirectory: resolve("cache-loader")
                }
              },
              "babel-loader"
            ]
          : ["babel-loader"],
        exclude: /node_modules/,
        include: resolve("src")
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 2
            }
          },
          "postcss-loader"
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 2
            }
          },
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.svg$/,
        loader: "svg-sprite-loader",
        include: [resolve("src/icons")],
        options: {
          symbolId: "icon-[name]"
        }
      },
      {
        test: /.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        exclude: [resolve("src/icons")],
        options: {
          limit: 10000,
          name: "img/[name].[hash:4].[ext]"
        }
      },
      {
        test: /.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "media/[name].[hash:4].[ext]"
        }
      },
      {
        test: /.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "fonts/[name].[hash:4].[ext]"
        }
      }
    ]
  },
  plugins: [
    //keep module.id stable when vendor modules does not change
    new depsPlugin(JSON.stringify(require("../package.json").version)),
    new webpack.HashedModuleIdsPlugin(),
    new vConsolePlugin({ enable: !!argv.debug }),
    new VueLoaderPlugin(), // vue loader 15 必须添加plugin
    new WriteJsonPlugin({
      object: {
        version: require('../package.json').version,
      },
      filename: 'version.json',
      pretty: true, // makes file human-readable (default false)
    }),
  ].concat(plugins)
};
