const commonConfig = require('./webpack.common');
const path = require('path');
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin');

module.exports = merge(commonConfig, {
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        publicPath: '/',
        compress: true,
        port: 9000,
        hot: true,
        inline: true,
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                include: [path.resolve(__dirname, 'src')],
                use: [MiniCssExtractPlugin.loader, 'fast-css-loader', 'fast-sass-loader'],
            },
        ]
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
})