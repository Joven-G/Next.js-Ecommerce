const _ = require('lodash');
const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
const S3Plugin = require('webpack-s3-plugin');

const config = require('./webpack.config.base');
const serverConfig = require('./server.config');


// Merge with base configuration
//-------------------------------
_.merge(config, {
  cache: false,
});

delete config.output.libraryTarget;
delete config.output.pathinfo;

// Save files to disk
//-------------------------------
config.plugins.push(
  new webpack.DefinePlugin({
    'process.env.BLUEBIRD_WARNINGS': '0',
    'process.env.NODE_ENV': '"production"',
    'process.env.IS_CLIENT': true,
  }),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      screw_ie8: true,
      warnings: false
    }
  }),
  new S3Plugin({
  // Exclude uploading of html
    exclude: /.*\.html$/,
  // s3Options are required
    s3Options: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_KEY,
      region: 'us-west-2'
    },
    s3UploadOptions: {
      Bucket: 'ecommerce-media'
    },
    cdnizerOptions: {
      defaultCDNBase: serverConfig.assets.cdn
    }
  })
);

// Sanity checks
//-------------------------------
if (config.devtool === 'eval') {
  throw new Error('webpack: using "eval" source-maps may break the build');
}

// Compile everything for PROD
//-------------------------------
console.info('webpack: running production build...');

const compiler = webpack(config);
compiler.run((err, stats) => {
  if (err) throw err;

  // Output stats
  console.log(stats.toString({
    colors: true,
    hash: true,
    chunks: false,
    version: false,
    chunkModules: false
  }));

  // Write hash in file
  fs.writeFileSync(path.resolve(__dirname, '../public/hash'), stats.hash);

  if (stats.hasErrors()) {
    console.warn('webpack: finished compiling webpack with errors...');
    console.warn(stats.compilation.errors.toString());
  } else {
    console.info('webpack: finished compiling webpack');
  }
});

module.exports = config;
