const path = require('path')

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    'dist/index': './src/index.js'
  },
  output: {
    path: __dirname,
    library: 'vue-browserlike-window',
    libraryTarget: 'umd',
    globalObject: 'this'
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
