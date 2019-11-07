const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('./webpack.config.base')

const defalutPluins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"development"'
    }
  }),
  new HtmlWebpackPlugin({
    template: path.join(__dirname, 'template.html'),
    filename: 'index.html',
    minfy: {
      removeAttributeQuotes: true,
      collapseWhitespace: true
    },
    hash: true
  })
]

const devServer = {
  port: 8080,
  overlay: {
    errors: true
  },
  hot: true,
  progress: true, //  导报进度条
  contentBase: './dist', //根地址对应路径
  compress: true // 是否启用gzip压缩
}

let config = {}

config = merge(baseConfig, {
  entry: path.join(__dirname, '../practice/index.js'),
  module: {
    rules: [
      {
        test: /\.(sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      }
    ]
  },
  devServer,
  resolve: {
    alias: {
      vue: path.join(__dirname, '../node_modules/vue/dist/vue.esm.js')
    }
  },
  plugins: defalutPluins.concat([
    new webpack.HotModuleReplacementPlugin()
    // new webpack.NoEmitOnErrorsPlugin()
  ])
})

module.exports = config
