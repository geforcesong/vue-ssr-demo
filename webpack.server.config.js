const merge = require('webpack-merge');
const base = require('./webpack.base.config.js');
const WebpackShellPlugin = require('webpack-shell-plugin');
const path = require('path');

const commands = [];
commands.push(`node-sass ./web/home/styles/home-inline.scss ./web/home/styles/home-inline.css --output-style compressed`);

module.exports = merge(base(true), {
    target: 'node',
    entry: {
        home: './web/home/entry-server.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].server.bundle.js',
        libraryTarget: 'commonjs2'
    },
    plugins: [
        new WebpackShellPlugin({
            onBuildStart: commands,
            onBuildEnd: []
        })
    ]
});