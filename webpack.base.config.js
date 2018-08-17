const ExtractTextPlugin = require('extract-text-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = function () {
    return {
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.s?css$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'vue-style-loader',
                        use: [{ loader: 'css-loader', options: { minimize: false } }, 'sass-loader']
                    })
                }, {
                    test: /\.js$/,
                    loader: 'babel-loader'
                }
            ]
        },
        devtool: 'source-map',
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js'
            },
            extensions: ['*', '.js', '.vue', '.json']
        },
        plugins: [
            new VueLoaderPlugin(),
            new ExtractTextPlugin({ filename: '[name].common.css', allChunks: true })
        ]
    }
}