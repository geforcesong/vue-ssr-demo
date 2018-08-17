const merge = require('webpack-merge');
const base = require('./webpack.base.config.js');
const WebpackShellPlugin = require('webpack-shell-plugin');
const path = require('path');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');

module.exports = merge(base(true), {
    target: 'node',
    entry: {
        site: './web/common/vserver/entry-server.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].server.bundle.js',
        libraryTarget: 'commonjs2'
    },
    plugins: [
        new VueSSRServerPlugin()
    ]
});