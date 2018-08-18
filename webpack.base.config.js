const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function (options) {
    return {
        mode: 'development',
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.s?css$/,
                    use: [
                        options.isServer ? 'null-loader' : MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader']
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
            new MiniCssExtractPlugin({
                filename: "[name].css",
                chunkFilename: "[id].css"
            })
        ]
    }
}