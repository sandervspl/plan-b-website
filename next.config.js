/* eslint-disable @typescript-eslint/no-var-requires */
const { PHASE_PRODUCTION_SERVER } = require('next/constants');
const withTypescript = require('@zeit/next-typescript');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const config = (phase) => {
  const dirPaths = {
    distDir: '../dist',
    publicRuntimeConfig: {
      staticFolder: '/static',
    },
  };

  let cfg = dirPaths;

  /*
    BASE CONFIG
  */
  if (phase !== PHASE_PRODUCTION_SERVER) {
    // Only add Webpack config for compile phases
    const webpack = require('webpack');

    cfg = {
      ...cfg,
      webpack: (config) => {
      /*
        WEBPACK CONFIG
        Your regular Webpack configuration, except we have to work with an already existing
        Webpack configuration from Next. When changing anything, keep in mind to preserve the
        config of Next (unless you are trying to overwrite something) or things might break.
      */
        const rules = [
          {
            test: /\.svg$/,
            oneOf: [
              {
                resourceQuery: /external/,
                loader: 'url-loader?limit=10000',
              },
              {
                loader: '@svgr/webpack',
              },
            ],
          },
          {
            test: /\.(jpe?g|png|gif)$/i,
            oneOf: [
              {
                resource: /external/,
                loader: 'file-loader',
                query: { name: 'static/[name].[ext]' },
              },
              {
                loader: 'url-loader',
                query: {
                  limit: 10000,
                  name: 'static/[name].[ext]',
                },
              },
            ],
          },
          {
            exclude: [
              /\.[tj]sx?$/,
              /\.css$/,
              /\.svg$/,
              /\.(jpe?g|png|gif)$/i,
              /\.json$/,
            ],
            loader: 'file-loader',
            options: { name: 'static/[name].[ext]' },
          },
        ];

        // Preserve Next rules while appending our rules
        config.module.rules = [...config.module.rules, ...rules];

        // Resolve absolute paths
        config.resolve.plugins = [
          new TsconfigPathsPlugin(),
        ];

        config.plugins.push(new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
            APP_ENV: JSON.stringify(process.env.APP_ENV || 'development'),
            PORT: process.env.PORT || 3000,
          },
          __DEV__: config.appEnv === 'development',
          __TEST__: config.appEnv === 'test',
          __ACC__: config.appEnv === 'acceptation',
          __PROD__: config.appEnv === 'production',
        }));

        return config;
      },
    };
  }

  return withTypescript(cfg);
};

module.exports = config;
