module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.js',
          '.ts',
          '.tsx',
          '.json',
          '.android.ts',
          '.android.tsx',
          '.ios.ts',
          '.ios.tsx',
          '.mobile.ts',
          '.mobile.tsx',
          '.native.ts',
          '.native.tsx',
        ],
      },
    ],
    'react-native-reanimated/plugin', // Reanimated plugin has to be listed last.
  ],
};
