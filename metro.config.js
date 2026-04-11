const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.alias = {
  'css-tree': require.resolve('css-tree'),
};

module.exports = config;