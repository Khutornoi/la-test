const COMMON_PLUGINS = [
  [
    'module-resolver',
    {
      root: ['./src'],
      extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
    },
  ],
];

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [...COMMON_PLUGINS],
  env: {
    production: {
      plugins: [...COMMON_PLUGINS, 'transform-remove-console'],
    },
  },
};
