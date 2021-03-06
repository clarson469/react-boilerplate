const path = require('path');
const webpack = require('webpack');

const PUBLIC = path.resolve(__dirname, 'public');
const SRC = path.resolve(__dirname, 'src');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    path.resolve(SRC, 'index.js'),
  ],
  devServer: {
    contentBase: PUBLIC,
    hot: true,
    noInfo: true,
    quiet: true,
    stats: {
      warningsFilter: (warning) => warning.includes('differ in casing'),
    },
  },
  resolve: {
    modules: [
      SRC,
      path.resolve('./node_modules'),
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
  output: {
    publicPath: '/',
    path: PUBLIC,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.jsx?$/,
        include: SRC,
        loader: 'babel-loader',
      },
    ],
  },
};
