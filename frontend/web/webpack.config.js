const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv').config({path: './.env'});

const babelLoaderConfiguration = {
  test: /\.(js|jsx|ts|tsx)$/,
  exclude:
    /node_modules\/(?!react-native-vector-icons|react-native-reanimated)/, // react-native-vector-icons와 react-native-reanimated를 제외
  use: {
    loader: 'babel-loader',
    options: {
      configFile: path.resolve(__dirname, 'babel.config.web.js'),
    },
  },
};

const dataLoader = {
  test: /\.(png|jpe?g|gif|svg|ttf|otf|eot|woff|woff2)$/i,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[hash].[ext]',
        outputPath: (url, resourcePath, context) => {
          if (/\.(png|jpe?g|gif|svg)$/i.test(resourcePath)) {
            return `assets/images/${url}`;
          }
          if (/\.(ttf|otf|eot|woff|woff2)$/i.test(resourcePath)) {
            return `assets/fonts/${url}`;
          }
        },
      },
    },
  ],
};

const cssLoaderConfiguration = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
};

module.exports = {
  entry: path.resolve('index.js'),
  module: {
    rules: [babelLoaderConfiguration, cssLoaderConfiguration, dataLoader],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
      filename: 'index.html',
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.parsed || {}),
      __DEV__: JSON.stringify(process.env.DEVELOP),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {from: 'assets', to: 'assets'}, // assets 폴더를 복사
        {
          from: 'node_modules/react-native-vector-icons/Fonts',
          to: 'assets/fonts',
        }, // 폰트 폴더 복사
      ],
    }),
  ],
  resolve: {
    alias: {
      'react-native$': 'react-native-web',
    },
    extensions: [
      '.web.ts',
      '.web.tsx',
      '.web.js',
      '.web.jsx',
      '.ts',
      '.tsx',
      '.js',
      '.jsx',
      '.android.ts',
      '.android.tsx',
      '.android.js',
      '.android.jsx',
      '.ios.ts',
      '.ios.tsx',
      '.ios.js',
      '.ios.jsx',
    ],
  },
  devServer: {
    compress: true,
    port: 8080,
    historyApiFallback: true,
    static: [
      {
        directory: path.resolve('assets'),
        publicPath: '/assets',
      },
      {
        directory: path.resolve('node_modules/react-native-vector-icons/Fonts'),
        publicPath: '/fonts',
      },
    ],
  },
};
