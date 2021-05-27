const commonConfig = require('./webpack.common');
const path = require('path');
const { merge } = require('webpack-merge');
const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CreateFileWebpack = require('create-file-webpack')

module.exports = merge(commonConfig, {
    mode: 'production',
    output: {
        path: resolve(__dirname, 'build'),
        publicPath: '/lisc/',
    },
    devtool: 'source-map',
    plugins: [
        new CreateFileWebpack({
            path: resolve(__dirname, 'build'),
            fileName: 'README.md',
            content: 'Why, hello there traveler. ' +
                'You found yourself in branch with files generated by [webpack](https://webpack.js.org/) which make up the repository [github page](https://pages.github.com/).\n' +
                'For the source files head over to the [main](https://github.com/mpunkenhofer/lisc/tree/main) branch.\n'
        })
    ],
})