module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.ts', '.tsx', '.json']
      }
    ],
    'react-native-reanimated/plugin', // Reanimated plugin has to be listed last.
  ],
};
