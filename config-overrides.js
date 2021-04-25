const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const {
  override,
  addBabelPlugin,
  addWebpackPlugin,
  removeModuleScopePlugin,
  addWebpackModuleRule,
} = require('customize-cra');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  webpack: override(
    removeModuleScopePlugin(),
    addBabelPlugin('babel-plugin-react-native-web'),
    addBabelPlugin([
      'babel-plugin-module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.ts', '.tsx', '.json'],
      },
    ]),
    addWebpackPlugin(
      new webpack.DefinePlugin({
        __DEV__: process.env.NODE_ENV !== 'production',
      }),
    ),
    addWebpackModuleRule({
      test: /\.(jpg|png|gif)$/,
      loader: 'file-loader',
      options: {
        esModule: false,
      },
    }),
  ),
  paths: function (paths) {
    paths.appPublic = resolveApp('web');
    paths.appHtml = resolveApp('web/index.html');
    paths.appBuild = resolveApp('build/web');
    paths.swSrc = resolveApp('src/serviceWorker.ts');

    return paths;
  },
};
