const path = require('path')

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    'sample/sample': './sample/main.js'
  },
  output: {
    path: __dirname
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '@': path.resolve(__dirname, './src/')
    }
  }
}
