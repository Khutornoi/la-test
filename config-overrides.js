// config-overrides.js
const {addWebpackAlias, babelInclude, fixBabelImports, addBabelPlugins, override} = require('customize-cra');
const {addReactRefresh} = require('customize-cra-react-refresh');

const path = require('path');

module.exports = override(
  addReactRefresh(),
  fixBabelImports('module-resolver', {
    alias: {
      '^react-native$': 'react-native-web',
      src: path.resolve(__dirname, './src'),
      mobile: path.resolve(__dirname, './src/mobile'),
      web: path.resolve(__dirname, './src/web'),
      shared: path.resolve(__dirname, './src/shared'),
    },
  }),
  addWebpackAlias({
    'react-native': 'react-native-web',
    // here you can add extra packages
    src: path.resolve(__dirname, './src'),
    mobile: path.resolve(__dirname, './src/mobile'),
    web: path.resolve(__dirname, './src/web'),
    shared: path.resolve(__dirname, './src/shared'),
  }),
  ...addBabelPlugins('@babel/plugin-proposal-class-properties'),
  babelInclude([
    path.resolve('src'),
    path.resolve('app.json'),
    // any react-native modules you need babel to compile
  ]),
);
