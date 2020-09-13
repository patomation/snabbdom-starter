const path = require('path')
const { merge } = require('webpack-merge')
const defaultConfig = require('./webpack.config')

module.exports = merge(defaultConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  cache: true,
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    inline: true,
    port: 3000
  }
})
