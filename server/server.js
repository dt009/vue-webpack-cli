/*
 * @Author: duantao-ds
 * @Date: 2018-08-09 11:10:08
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-09 15:49:47
 */

const config = require('../config/config');
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const app = express();

const webpack = require('webpack');

const webpackConfig = require('../webpack-config/webpack.dev');

const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath
}))


app.use(webpackHotMiddleware(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
}))

app.listen(config.port)

console.log('http://loaclhost:' + config.port);
