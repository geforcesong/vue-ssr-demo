const merge = require('webpack-merge');
const base = require('./webpack.base.config.js');
var path = require('path');

module.exports = merge(base(true), {
    entry: {
        site: './web/common/vclient/entry-client.js'
    },
    output: {
        path: path.resolve(__dirname, './public'),
        filename: '[name].client.bundle.js',
        chunkFilename: '[name].chunk.bundle.js'
    },
    devtool: false
});