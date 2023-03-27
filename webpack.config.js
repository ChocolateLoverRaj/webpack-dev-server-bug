const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './index.js',
  plugins: [new HtmlWebpackPlugin()],
  mode: 'development'
}
