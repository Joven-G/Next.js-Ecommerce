const _ = require('lodash');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.base');
const serverConfig = require('./server.config');

// Use port ( if you change this adapt code in Html.jsx as well )
const devPort = serverConfig.webpack.dev_port;

// Merge with base configuration
//-------------------------------
_.merge(config, {
  cache: true,
  devtool: 'source-map',
  entry: {
    bundle: [
      //'webpack/hot/dev-server',
      `webpack-dev-server/client?http://localhost:${devPort}`,
      config.entry
    ]
  }
});

// Setup webpack for DEV
//-------------------------------
const compiler = webpack(config);
const compilerConfig = {
  contentBase: 'build',
  filename: 'bundle.js',
  compress: true,
  hot: true,
  watchOptions: {
    poll: true,
    aggregateTimeout: 500,
    ignore: /node_modules|data|build|\.git/
  },
  stats: {
    colors: true,
    version: false,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: false
  }
};

// Launch DEV server
//-------------------------------
console.info('webpack: running dev build...');


const server = new WebpackDevServer(compiler, compilerConfig);
server.listen(devPort, () => {
  console.info(`webpack: dev server running on port ${devPort}`);
});


module.exports = config;
