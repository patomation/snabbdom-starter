const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')
const { titleCase } = require('title-case')
const pkg = require('./package.json')

module.exports = {
  entry: './build/app/bootstrap.js',
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.eot$|\.woff$|\.woff2$|\.ttf$|\.wav$|\.mp3$/,
        loader: 'file-loader?name=[name].[ext]' // Keeps original file name
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      hash: true,
      title: titleCase(pkg.name.replace('-', ' ')),
      template: './public/index.html',
      filename: './index.html'
    })
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    pathinfo: false, // optimization
    filename: 'bundle.js'
  }
}
