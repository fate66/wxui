'use strict'
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const utils = require('./utils')
// const StatsWriterPlugin = require('webpack-stats-plugin').StatsWriterPlugin

// const fileNameTransfer = fileName => fileName.match(/[A-Z][a-z]*/g).map((e) => e.toLowerCase()).join('-')
const env = process.argv[process.argv.length - 1]
module.exports = {
  mode: env,
  devtool: env === 'production' ? 'none' : 'inline-source-map',
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      // 'vue$': 'vue/dist/vue.esm.js',
      '@': utils.resolve('src'),
      'src': utils.resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader?cacheDirectory',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                require("autoprefixer"),
                require('postcss-pxtorem')({
                  rootValue: 75,
                  unitPrecision: 5,
                  propList: ['*'],
                  selectorBlackList: [],
                  replace: true,
                  mediaQuery: false,
                  minPixelValue: 2
                })
              ]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'  // 可以把css放在页面上
          },
          {
            loader: 'css-loader'    // 放在后面的先被解析
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'img/[name].[hash:7].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}

