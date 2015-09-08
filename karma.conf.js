var webpack = require('webpack');
var webpackConfig = require('./webpack.config');

module.exports = function(config) {
  config.set({
  basePath: '',
  frameworks: ['jasmine'],
  files: [
    './node_modules/phantomjs-polyfill/bind-polyfill.js',
    'components/**/*.spec.js'
  ],
  preprocessors: {
    'components/**/*.spec.js': ['webpack']
  },
  webpack: {
    devtool: 'inline-source-map',
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader?stage=0'
        }
      ]
    }
  },
  webpackServer: {
    noInfo: true
  },
  reporters: ['spec'],
  port: 9876,
  colors: true,
  logLevel: config.LOG_INFO,
  autoWatch: true,
  browsers: ['PhantomJS'],
  singleRun: false,
  plugins: [
      require("karma-webpack"),
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-phantomjs-launcher"),
      require("karma-spec-reporter")
    ]
  })
}
