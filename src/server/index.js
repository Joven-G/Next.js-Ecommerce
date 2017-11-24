import path from 'path';
import sass from 'node-sass';
import hook from 'css-modules-require-hook';

//-----------
// Generate css classNames before rendering
//-----------
hook({
  rootDir: path.join(__dirname, '../client'),
  extensions: ['.scss'],
  generateScopedName: '[local]',
  preprocessCss(data, file) {
    return sass.renderSync({
      data,
      file,
      includePaths: [
        path.join(__dirname, '../client'),
        path.join(__dirname, '../../node_modules')
      ]
    }).css;
  }
});

//-----------
// Spawn webpack as a separate process ( prevents pointless garbage collection in the same process )
//-----------
const webpackconfig = path.join(__dirname,
  `../../config/webpack.config.${((process.env.NODE_ENV === 'production' ||
  process.env.NODE_ENV === 'stage') ? 'prod' : 'dev')}`);
require('child_process').spawn('node', [webpackconfig], { stdio: 'inherit' });

//-----------
// Setup and launch server
//-----------
require('./server');
