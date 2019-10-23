const path = require('path')

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: './sample/main.js',
  output: {
    filename: 'sample/sample',
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
