// `CheckerPlugin` is optional. Use it if you want async error reporting.
// We need this plugin to detect a `--watch` mode. It may be removed later
// after https://github.com/webpack/webpack/issues/3460 will be resolved.
import { resolve } from 'path'
import * as webpack from 'webpack'

const { CheckerPlugin } = require('awesome-typescript-loader')

const config: webpack.Configuration = {
  // Currently we need to add '.ts' to the resolve.extensions array.
  entry: resolve('./src/index.ts'),
  output: {
    path: resolve('./dist'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  // Source maps support ('inline-source-map' also works)
  devtool: 'source-map',
  // Add the loader for .ts files.
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  plugins: [
      new CheckerPlugin()
  ]
};

export default config