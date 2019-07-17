/* eslint-disable @typescript-eslint/no-var-requires */
import { PHASE_PRODUCTION_SERVER } from 'next/constants';
import { NextConfig } from 'next';
import { Configuration, Rule } from 'webpack';

const config = (phase: string): NextConfig => {
  let cfg: NextConfig = {
    distDir: '../dist',
  };

  /*
    BUILD CONFIG
  */
  if (phase !== PHASE_PRODUCTION_SERVER) {
    // Only add dev packages config for compile phases
    const webpack = require('webpack');
    const withTypescript = require('@zeit/next-typescript');
    const withCSS = require('@zeit/next-css'); // For slick-slider
    const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
    const withFonts = require('next-fonts');

    cfg = {
      ...cfg,
      webpack: (config: Configuration, { isServer }): Configuration => {
        const appEnv = process.env.APP_ENV || 'development';

        /*
          WEBPACK CONFIG
          Your regular Webpack configuration, except we have to work with an already existing
          Webpack configuration from Next. When changing anything, keep in mind to preserve the
          config of Next (unless you are trying to overwrite something) or things might break.
        */
        const rules: Rule[] = [
          {
            test: /\.svg$/,
            oneOf: [
              {
                resourceQuery: /external/,
                loader: 'url-loader',
                options: {
                  limit: 10000,
                },
              },
              {
                loader: '@svgr/webpack',
              },
            ],
          },
          {
            test: /\.(jpe?g|png|gif|ico|webp)$/,
            exclude: cfg.exclude,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 10000,
                  fallback: 'file-loader',
                  publicPath: '/_next/static/images/',
                  outputPath: `${isServer ? '../' : ''}static/images/`,
                  name: '[name].[ext]',
                },
              },
            ],
          },
        ];

        // Preserve Next rules while appending our rules
        config.module!.rules = [...config.module!.rules, ...rules];

        // Resolve absolute paths
        config.resolve!.plugins = [
          // @ts-ignore this is correct
          new TsconfigPathsPlugin(),
        ];

        // @ts-ignore this is correct
        config.plugins!.push(new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
            APP_ENV: JSON.stringify(process.env.APP_ENV || 'development'),
            PORT: process.env.PORT || 3000,
          },
          __DEV__: appEnv === 'development',
          __TEST__: appEnv === 'test',
          __ACC__: appEnv === 'acceptation',
          __PROD__: appEnv === 'production',
        }));

        return config;
      },
    };

    cfg = (
      withTypescript(
        withFonts(
          withCSS(cfg)
        )
      )
    );
  }

  return cfg;
};

export default config;
