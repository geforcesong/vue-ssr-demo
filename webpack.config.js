var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackShellPlugin = require('webpack-shell-plugin');

var commands = [];
commands.push(`node-sass ./web/home/styles/home-inline.scss ./web/home/styles/home-inline.css --output-style compressed`);

module.exports = {
    target: 'node',
    entry: {
        home: './web/home/entry-server.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].server.bundle.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    extractCSS: true,
                    scss: ExtractTextPlugin.extract({
                        use: 'css-loader!sass-loader',
                        fallback: 'vue-style-loader'
                    })
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    devtool: false,
    plugins: [
        new ExtractTextPlugin({ filename: 'common.css' }),
        new WebpackShellPlugin({
            onBuildStart: commands,
            onBuildEnd: []
        })
    ]
}

