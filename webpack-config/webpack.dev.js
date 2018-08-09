/*
 * @Author: duantao-ds
 * @Date: 2018-08-08 23:25:58
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-09 09:52:47
 */

const merge = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    },
    devtool: 'inline-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ]
})
