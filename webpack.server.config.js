const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = (env, argv) => {
  const mode = argv.mode;
  return {
    entry: './server/server.ts',
    output: {
      filename: 'server.bundle.js',
      path: path.resolve(__dirname, 'server'),
    },
    target: 'node',
    externals: [nodeExternals()],
    devtool: (mode === 'development') ? 'inline-source-map' : false,
    resolve: {
      extensions: [ '.ts' ],
    },
    module: {
      rules: [
        (mode === 'development') ? {
          enforce: 'pre',
          loader: 'tslint-loader',
          test: /\.ts$/,
          exclude: [
            /node_modules/
          ],
        } : {},
        {
          loader: 'ts-loader',
          test: /\.ts$/,
          exclude: [
            /node_modules/
          ],
          options: {
            configFile: (mode === 'development') ? 'tsconfig.dev.json' : 'tsconfig.prod.json',
          },
        },
      ],
    },
  };
};
