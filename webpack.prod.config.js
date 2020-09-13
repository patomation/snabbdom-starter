const { merge } = require('webpack-merge')
const defaultConfig = require('./webpack.config')

module.exports = merge(defaultConfig, {
  mode: 'production',
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false
  }
})
