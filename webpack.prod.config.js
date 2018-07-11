const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const NODE_ENV = process.env.NODE_ENV || 'development'

const cleanWebpackBuild = new CleanWebpackPlugin(['dist'], {
  root: __dirname,
  verbose: true,
  dry: false
})

module.exports = {
  entry: path.join(__dirname, '/src/index.js'),
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.[hash].js'
  },
  performance: {
    hints: 'warning'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'eslint-loader'
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|ttf|woff|eot|mp4|woff2)$/i,
        loader: 'file-loader',
        options: {
          name: 'assets/[path][name].[hash].[ext]',
          context: './src/assets'
        }
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    alias: {
      app: path.resolve(__dirname, 'src')
    },
    extensions: ['.js', '.json', '.jsx']
  },
  plugins: [
    cleanWebpackBuild,
    new HTMLWebpackPlugin({
      template: path.join(__dirname, '/src/index.html'),
      filename: 'ecmcHtmlEditor.html',
      inject: 'body'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    // Define free variables. Useful for having development builds with debug logging or adding global constants.
    // Reference: https://github.com/webpack/docs/wiki/list-of-plugins#defineplugin
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    }),
    new MiniCssExtractPlugin({})
  ]
}
