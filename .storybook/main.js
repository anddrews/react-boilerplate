const path = require('path');

// your app's webpack.config.js
const custom = require('../webpack.config.js');
console.log(custom);
module.exports = {
  webpackFinal: (config) => console.dir(config, { depth: null }) || config,
  stories: ['../src/**/*.stories.[tj]s[x]'],
};
