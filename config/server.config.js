const path = require('path');

// Main server/app configuration
module.exports = {
  locales: ['en', 'pt'],
  assets: {
    cdn: '',
  },
  http: {
    port: process.env.PORT || 5400,
    favicon: path.join(__dirname, '..', 'src/client/assets/favicon.ico'),
    robots: 'User-agent: *\nDisallow:',
    static: [
      {
        url: '/public', path: path.join(__dirname, '..', 'public/')
      }
    ]
  },
  webpack: {
    dev_port: 4000
  }
};
