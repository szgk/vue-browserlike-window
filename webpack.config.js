const path = require('path')

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    'sample/sample': './sample/main.js'
  },
  output: {
    path: __dirname
  },
  devServer: {
    port: 3333,
    contentBase: path.resolve(__dirname, 'sample'),
    host: 'localhost',
    hot: true
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
  // plugins: [
  //   new VueLoaderPlugin()
  // ],
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '@': path.resolve(__dirname, './src/')
    }
  }
}
