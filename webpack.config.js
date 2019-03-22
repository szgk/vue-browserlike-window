const path = require('path');
// const VueLoaderPlugin = require('vue-loader/lib/plugin')
// Error: Cannot find module 'webpack/lib/RuleSet'
// https://github.com/vuejs/vue-loader/issues/1427

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry:{main: './sample/main.ts'},
  devServer: {
    port: 3333,
    contentBase: path.resolve(__dirname, 'dist'),
    host: 'localhost',
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        },
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
        options: {
          loaders: {
            ts: [{
              loader: 'ts-loader',
                options: {
                appendTsSuffixTo: [/\.vue$/]
              }
            }]
          },
        }
      }
    ]
  },
  // plugins: [
  //   new VueLoaderPlugin()
  // ],
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.sss'],
    alias: {
      '@': path.resolve(__dirname, './src/')
    }
  }
}