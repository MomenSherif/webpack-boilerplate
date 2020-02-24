const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common');

const dev = {
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'Webpack 4 Boilerplate'
    })
  ],
  module: {
    rules: [
      {
        // css
        test: /\.css$/i,
        use: [
          'style-loader', // execute second
          'css-loader' // execute first
        ]
      },

      {
        // TS
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        // SASS
        test: /\.(s*)css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'assets',
              esModule: false
            }
          }
        ]
      }
    ]
  }
};

module.exports = merge(common, dev);
