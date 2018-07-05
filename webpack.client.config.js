const merge = require('webpack-merge');
const base = require('./webpack.base.config.js');
var path = require('path');

module.exports = merge(base(true), {
    entry: {
        home: './web/home/client/_main.js'
    },
    output: {
        path: path.resolve(__dirname, './public'),
        filename: '[name].client.bundle.js'
    },
    devtool: false
});