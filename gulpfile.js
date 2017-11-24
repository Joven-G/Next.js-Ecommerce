'use strict';

const gulp = require('gulp');
const fs = require('fs');
const extract = require('i18n-extract');
const config = require('./config/server.config.js');

gulp.task('default', () => {
  const langs = config.locales;
  langs.forEach((item) => {
    const lang = require(`./src/client/locales/${item}.js`);
    const keys = extract.extractFromFiles(['src/**/*.js'], { marker: '__' });
    let write = 'module.exports = {\n';
    let write1 = '';
    let write2 = '';

    keys.forEach((key) => {
      if (!(lang[key]) || lang[key] === '') {
        write1 += `\t//'${key.replace("'", "\\'")}': '', //new\n`;
      } else {
        write2 += `\t'${key.replace("'", "\\'")}': '${lang[key]}',\n`;
      }
    });
    write += `${write1}${write2}};\n`;
    console.log(write);
    fs.writeFile(`./src/client/locales/${item}.js`, write, (err) => {
      if (err) {
        throw err;
      }
    });
  }
);
});
