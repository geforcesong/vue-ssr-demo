var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        home: './web/home/client/_main.js'
    },
    output: {
        path: path.resolve(__dirname, './public'),
        filename: '[name].client.bundle.js'
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
        new ExtractTextPlugin({ filename: 'common.css' })
    ]
}

