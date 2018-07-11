const merge = require('webpack-merge')
const config = require('./webpack.config')

module.exports = merge.smart(config, {
  output: {
    publicPath: 'https://s3-eu-west-1.amazonaws.com/monty-content-builder-master/',
    filename: 'bundle-master.js'
  },
  module: {
    rules: [
      {
        test: /\.(ttf|woff|eot|woff2)$/i,
        loader: 'url-loader',
        options: {
          limit: 2000000
        }
      }
    ]
  }
})
