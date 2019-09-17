'use strict'
const utils = require('./utils')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const portfinder = require('portfinder')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

// const StatsWriterPlugin = require('webpack-stats-plugin').StatsWriterPlugin

// const fileNameTransfer = fileName => fileName.match(/[A-Z][a-z]*/g).map((e) => e.toLowerCase()).join('-')

const devWebpackConfig = merge(baseConfig, {
  entry: utils.resolve('example/index.js'),
  output: {
    path: utils.resolve('dist'),
    filename: 'demo.js'
  },
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: false,
    hot: true,
    contentBase: utils.resolve('dist'), // since we use CopyWebpackPlugin.
    compress: true,
    host: 'wxui.weidian.com', // can be overwritten by process.env.HOST
    port: 8091,
    open: true,
    // overlay: config.dev.errorOverlay
    //     ? { warnings: false, errors: true }
    //     : false,
    publicPath: '/',
    // proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      // favicon: './src/images/favicon.ico', //favicon路径，通过webpack引入同时可以生成hash值
      filename: 'index.html',
      template: utils.resolve('example/index.html'), // html模板路径
      inject: 'body',
      hash: false,
      // chunks: [item.chunk, `js/vendor`],
      minify: false
    })
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || 8091
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port
      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`debug page：http://${devWebpackConfig.devServer.host}:${port}/`]
        },
        onErrors: utils.createNotifierCallback()
      }))
      resolve(devWebpackConfig)
    }
  })
})
