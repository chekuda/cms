const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = {
  devtool: 'source-map',
  entry: path.join(__dirname, '/src/index.js'),
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  performance: {
    hints: false
  },
  mode: 'development',
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
        test: /\.(jpe?g|png|gif|svg|mp4)$/i,
        loader: 'file-loader',
        options: {
          name: 'assets/[path][name].[ext]',
          context: './src/assets'
        }
      },
      {
        test: /\.(ttf|woff|eot|woff2)$/i,
        loader: 'file-loader',
        options: {
          name: 'assets/[path][name].[ext]',
          context: './src/assets'
        }
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
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
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    new webpack.NamedModulesPlugin(),
    new HTMLWebpackPlugin({
      template: path.join(__dirname, '/src/index.html'),
      filename: 'index.html',
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
    })
  ]
}
