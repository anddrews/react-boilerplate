const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  entry: './index.jsx',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.js'
  },
  context: path.join(__dirname, 'src'),
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.css', '.jsx', '.scss'],
    modules: [path.resolve(__dirname, '/'), 'node_modules'],
    alias: {
      assets: path.resolve(__dirname, './src/assets'),
      components: path.resolve(__dirname, './src/components'),
      const: path.resolve(__dirname, './src/const'),
      containers: path.resolve(__dirname, './src/container'),
      reducers: path.resolve(__dirname, './src/reducers'),
      utils: path.resolve(__dirname, './src/utils'),
      selectors: path.resolve(__dirname, './src/selectors'),
      actions: path.resolve(__dirname, './src/actions'),
    },
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    inline: true,
    host: 'localhost',
    port: 5000,
    stats: 'errors-only',
    hot: true,
    proxy: {
      '/api': 'http://localhost:3000',
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]--[hash:base64:5]',
                context: path.resolve(__dirname, 'src'),
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'imgs/',
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
              publicPath: 'http://localhost:5000/fonts/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),

  ]
};
