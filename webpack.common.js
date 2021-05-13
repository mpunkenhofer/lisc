const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    context: __dirname,
    output: {
        filename: '[name].[chunkhash:5].js',
        chunkFilename: '[name].[chunkhash:5].js',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            // Make compilation faster with `fork-ts-checker-webpack-plugin`
                            transpileOnly: true
                        }
                    }
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: 'url-loader',
            },
            {
                test: /\.svg$/,
                oneOf: [
                    {
                        issuer: /\.(ts|tsx)$/,
                        use: '@svgr/webpack',
                    },
                    {
                        issuer: /\.(css|less)$/,
                        use: 'url-loader',
                    },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: 'url-loader',
            },
        ],
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new ForkTsCheckerWebpackPlugin(),
        new HtmlWebpackPlugin({ template: 'public/index.html' })    
    ],
    devtool: 'source-map',
    externals: {
        React: 'React',
        ReactDOM: 'ReactDOM',
    },
}