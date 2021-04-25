const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  webpack: function (config, env) {
    config.resolve.plugins = config.resolve.plugins.filter(
      plugin => plugin.constructor.name !== 'ModuleScopePlugin',
    );
    config.module.rules[1].oneOf[2].options.plugins = [
      require.resolve('babel-plugin-react-native-web'),
    ].concat(config.module.rules[1].oneOf[2].options.plugins);
    config.plugins.push(
      new webpack.DefinePlugin({ __DEV__: env !== 'production' }),
    );
    return config;
  },
  paths: function (paths) {
    paths.appPublic = resolveApp('web');
    paths.appHtml = resolveApp('web/index.html');
    paths.appBuild = resolveApp('build/web');
    paths.swSrc = resolveApp('src/serviceWorker.ts');

    return paths;
  },
};
