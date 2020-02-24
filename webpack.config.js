const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {
    vendors: './src/scripts/vendors.js',
    script: './src/scripts/index.js',
    ts: './src/typescript/index.ts'
  },
  output: {
    filename: '[name].bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'Webpack 4 Boilerplate'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css'
    })
  ],
  module: {
    rules: [
      {
        // css
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader, // execute second
          'css-loader' // execute first
        ]
      },
      {
        // babel
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
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
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        // HTML Loader
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        // Image loader with optimization
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              esModule: false,
              limit: 8192
            }
          },
          'image-webpack-loader'
        ]
      }
      // {
      //   test: /\.(png|jpe?g|gif)$/i,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: '[name].[hash].[ext]',
      //         outputPath: 'assets',
      //         esModule: false
      //       }
      //     }
      //   ]
      // }
    ]
  }
};
