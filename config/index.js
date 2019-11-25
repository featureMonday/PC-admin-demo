"use strict";

const path = require("path");
const version = require('../package').version;

module.exports = {
  local: {
    // Paths
    assetsSubDirectory: "static",
    assetsPublicPath: "/pc-admin-1125/", // 相对文件路径
    proxyTable: {
      "/dev-api": {
        target: `http://0.0.0.0:8000/mock`,
        changeOrigin: true,
        pathRewrite: {
          "^/dev-api": ""
        }
      }
    },
    host: "0.0.0.0", // 为了方便别人访问，请设置0.0.0.0
    port: "8000", // 端口号
    autoOpenBrowser: true, // 是否自动打开浏览器
    errorOverlay: true, // 浏览器错误提示遮罩层
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-
    devtool: "eval-source-map", // Source Maps
    disableHostCheck: false // 当设置为true时，该选项绕过主机检查。不建议这样做，因为不检查主机的应用程序容易受到DNS重新绑定攻击。
  },
  dev: {
    // Paths
    assetsSubDirectory: "static",
    assetsPublicPath: `http://test.fsp-cdn.vortex.zj.chinamobile.com:8000/pc-admin-1125/${version}/`, // 相对文件路径

    devtool: "eval-source-map" // Source Maps
  },
  build: {
    // Paths
    assetsSubDirectory: "static",
    assetsRoot: path.resolve(__dirname, "../dist"),
    assetsPublicPath:`http://fsp-cdn.vortex.zj.chinamobile.com/pc-admin-1125/${version}/`, // 相对文件路径

    // 生产环境的souce map
    // https://webpack.js.org/co    // Paths
    //     assetsSubDirectory: 'static',nfiguration/devtool/#production
    // 生产环境下source map devtool 不做配置
    devtool: "source-map",
    // 生产环境下souce map的内网位置，private sourceMap
    sourcePath: ""
  }
};
