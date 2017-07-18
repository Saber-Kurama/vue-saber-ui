var path = require('path')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
const resolve = file => path.resolve(__dirname, file);
delete baseWebpackConfig.entry
var webpackConfig = merge.smart(baseWebpackConfig, {
    entry: {
        app: './src/index.js'
    },
    devtool: false,
    output: {
        path: resolve('../dist'),
        publicPath: '/dist/',
        filename: 'vue-saber-ui.js',
        library: 'VueSaberUI',
        libraryTarget: 'umd'
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                cssSourceMap: false,
                // cssModules: {
                //     localIdentName: '[path][name]---[local]---[hash:base64:5]',
                //     camelCase: 'dashesOnly'
                // },
                extractCSS: true,
                preserveWhitespace: false
            }
        }, ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'vue-saber-ui.css'
        }),
    ]
})
console.log('webpackConfig', JSON.stringify(webpackConfig))
module.exports = webpackConfig