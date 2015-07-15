'use strict';

var path = require('path');

module.exports = function (config) {
  config.set({
    basePath: path.resolve(__dirname, '..'),
    browsers: [ 'Chrome' ],
    browserNoActivityTimeout: 60000,
    client: {
      captureConsole: true,
      mocha: {
        ui: 'tdd'
      },
      useIframe: true
    },
    files: [
      'src/tests.bundle.js'
    ],
    frameworks: [
      'mocha'
    ],
    plugins: [
      'karma-chrome-launcher',
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-webpack'
    ],
    preprocessors: {
      'src/tests.bundle.js': [ 'webpack', 'sourcemap' ]
    },
    reporters: [ 'dots' ],
    singleRun: true,
    webpack: { // TODO(jcohen): refactor so this can be shared with the main webpack config.
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            // transpile ES6 to ES5
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          }
        ]
      },
      output: {
        path: path.resolve(__dirname, '..', 'dist'),
        publicPath: '/static'
      }
    },
    webpackMiddleware: {
      stats: {
        assetsSort: 'name',
        colors: true,
        children: false,
        chunks: false,
        modules: false
      }
    }
  });
};
