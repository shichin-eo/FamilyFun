const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const buildWebpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    plugins: [],
    //потом включить
    // optimization: {
    //     minimizer: [new TerserWebpackPlugin({ /* additional options here */ })],
    // },
})

module.exports = new Promise((resolve, reject) => {
    resolve(buildWebpackConfig)
})