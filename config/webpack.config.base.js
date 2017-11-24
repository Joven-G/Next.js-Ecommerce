const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractCSS = require('extract-text-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


// Define client source path
const sources = path.join(__dirname, '../src/client');

const env = process.env.NODE_ENV;
const name = process.env.NAME;

// Default config
const config = {
  entry: ['babel-polyfill', './index.js'],
  target: 'web',
  context: sources,
  node: {
    global: true,
    fs: 'empty'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: sources,
        babelrc: true,
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'stage-0', 'react'],
          plugins: [
            'transform-runtime',
            'transform-decorators-legacy', // Required for @connect and other decorators
            'add-module-exports', // A way to get rid of insanity of require('xx').default
          ]
        }
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.s?css$/,
        loader: ExtractCSS.extract('style',
          'css-loader?sourceMap&modules&importLoaders=1&localIdentName=[local]!postcss!sass')
      }
    ],
  },
  resolve: {
    extensions: ['', '.jsx', '.scss', '.css', '.js', '.json'],
    modules: ['node_modules'],
    modulesDirectories: [
      'node_modules',
      path.resolve(__dirname, '../node_modules')
    ],
  },
  postcss: [autoprefixer],
  sassLoader: {
    includePaths: [sources]
  },
  output: {
    path: path.resolve(__dirname, '..', 'public'),
    filename: `bundle${name ? '.' + name : ''}.${env}.js`,
    publicPath: '/',
  },
  plugins: [
    //new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/), // If you don't need moment's locales
    new ExtractCSS(`bundle${name ? '.' + name : ''}.${env}.css`, { allChunks: true }),
    new webpack.DefinePlugin({
      'process.env.IS_CLIENT': true,
    }),
    // new BundleAnalyzerPlugin()
  ]
};

module.exports = config;
