const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const merge = require('webpack-merge')
const VueClientPlugin = require('vue-server-renderer/client-plugin')

const baseConfig = require('./webpack.config.base')
const isDev = process.env.NODE_ENV === 'development'

const defalutPluins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: isDev ? '"development"' : '"production"'
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
  }),
  new VueClientPlugin()
]

const devServer = {
  port: 8080,
  host: '0.0.0.0',
  overlay: {
    errors: true
  },
  headers: { 'Access-Control-Allow-Origin': '*' },
  historyApiFallback: {
    /**
     * 前端路由使用history时需要指定真实根目录html
     * 路径为 output 中的 public + 打包时的根html
     */
    index: '/public/index.html'
  },
  proxy: {
    '/api': 'http://127.0.0.1:3333',
    '/user': 'http://127.0.0.1:3333'
  },
  hot: true,
  progress: true, //  导报进度条
  contentBase: './dist', //根地址对应路径
  compress: true // 是否启用gzip压缩
}

let config

if (isDev) {
  config = merge(baseConfig, {
    devtool: '#cheap-module-eval-source-map',
    module: {
      rules: [
        {
          test: /\.(sc|c)ss$/,
          use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
        }
      ]
    },
    devServer,
    plugins: defalutPluins.concat([
      new webpack.HotModuleReplacementPlugin()
      // new webpack.NoEmitOnErrorsPlugin()
    ])
  })
} else {
  config = merge(baseConfig, {
    entry: {
      app: path.join(__dirname, '../client/index.js')
    },
    output: {
      filename: '[name].[chunkhash:8].js'
    },
    module: {
      rules: [
        {
          test: /\.(sc|c)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ]
        }
      ]
    },
    plugins: defalutPluins.concat([
      new MiniCssExtractPlugin({
        filename: '[name].[hash].css',
        chunkFilename: 'styles.[id].[hash].css'
      })
    ]),
    optimization: {
      splitChunks: {
        // cacheGroups: {
        //   commons: {
        //     chunks: 'initial',
        //     minChunks: 2,
        //     maxInitialRequests: 5,
        //     minSize: 0
        //   },
        //   vendor: {
        //     test: /node_modules/,
        //     chunks: 'initial',
        //     name: 'vendor',
        //     priority: 10,
        //     enforce: true
        //   }
        // }
        chunks: 'all'
      },
      runtimeChunk: true
    }
  })
}

module.exports = config
