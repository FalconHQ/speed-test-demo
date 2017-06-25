const path = require('path');
const webpack = require('webpack');


module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
    module: {
      rules: [
        {
          test: /\.jsx?/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: { 
              presets: ['react','env'] 
            }
        },

        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: ['style-loader', 'postcss-loader']
        }
      ]
    }
};