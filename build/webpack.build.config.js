'use strict'
const fs = require('fs')
const utils = require('./utils')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')

// const StatsWriterPlugin = require('webpack-stats-plugin').StatsWriterPlugin

// const fileNameTransfer = fileName => fileName.match(/[A-Z][a-z]*/g).map((e) => e.toLowerCase()).join('-')

const generateEntrys = () => {
  let packages = fs.readdirSync('packages')
  let entrys = {
    'index': utils.resolve('src/index.js'),
  }
  if (packages) {
    packages.forEach((e) => {
      if (fs.statSync(`packages/${e}`).isDirectory()) {
        entrys[e] = utils.resolve(`packages/${e}/index.js`)
      }
    })
    return entrys
  }
}

module.exports = merge(baseConfig, {
  entry: generateEntrys(),
  output: {
    path: utils.resolve('dist'),
    filename: '[name].js',
    library: 'wxui',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs2: 'vue',
      amd: 'vue',
      commonjs: 'vue'
    }
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
})


// if (process.env.NODE_ENV === 'production') {
//   module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin({
//     output: {
//       comments: false,
//     },
//     compress: {
//       warnings: false
//     }
//   }))
//   // module.exports.plugins.push(new StatsWriterPlugin({
//   //   filename: 'stats.json',
//   //   transform: function(data, opts) {
//   //     let stats = opts.compiler.getStats().toJson({chunkModules: true})
//   //     return JSON.stringify(stats, null, 2)
//   //   }
//   // }))
// } else {
//   module.exports.devtool = 'eval-source-map'
// }
