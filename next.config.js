const path = require('path');

module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias['@utils'] = path.resolve(__dirname, 'solicit/src/utils');
    config.resolve.alias['@/utils'] = path.resolve(__dirname, 'solicit/src/utils');
    return config;
  },
};
