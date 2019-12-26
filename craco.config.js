// craco.config.js
const { getLoader, loaderByName } = require('@craco/craco');
const path = require('path');

module.exports = {
  plugins: [
    {
      plugin: {
        overrideWebpackConfig: ({ webpackConfig }) => {
          const {
            match: { loader },
          } = getLoader(webpackConfig, loaderByName('babel-loader'));

          loader.options.sourceType = 'unambiguous';
          loader.include = [
            path.resolve('src'),
            path.resolve('node_modules/react-dev-utils'),
            path.resolve('node_modules/chalk'),
            path.resolve('node_modules/strip-ansi'),
            path.resolve('node_modules/ansi-styles'),
          ];

          webpackConfig.entry.unshift(
            require.resolve('react-app-polyfill/stable'),
          );

          return webpackConfig;
        },
      },
    },
  ],
};
