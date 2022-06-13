const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:"development",
    entry: './index.js',
    devServer: {
        static: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
        }),
    ],
    optimization: {
        runtimeChunk: 'single',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean:true
    },
    module: {
        rules: [
          { test: /\.css$/, use: 'css-loader' },
          { test: /\.ts$/, use: 'ts-loader' },
        ],
      },
};