var path = require('path');
var config = {
    // 暂时不配置 context 
    // context: resolve('./src'), 
    // 实体
    entry: {
        app: './src/index1.js'
    },
    // 输出项
    output: {
        // path: resolve('../dist'),
        // publicPath: '/dist/',
        // filename: '[name].[chunkhash].js'
    },
    // 转换
    resolve: {}, // 暂时这样配置
    // 模块
    module: {
        rules: [
            // 校验先去掉
            // {
            //     test: /\.(js|vue)$/,
            //     loader: 'eslint-loader',
            //     enforce: "pre",
            //     include: [resolve('src'), resolve('test')],
            //     options: {
            //         formatter: require('eslint-friendly-formatter')
            //     }
            // },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    cssSourceMap: true,
                    cssModules: {
                        localIdentName: '[path][name]---[local]---[hash:base64:5]',
                        camelCase: 'dashesOnly'
                    },
                    extractCSS: true,
                    preserveWhitespace: true
                }
            },
            // 后期处理修改
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            // 静态资源的处理
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    limit: 10000,
                    name: '[name].[ext]?[hash]'
                }
            },
            //   require('./css-loader.config')
        ]
    },
    // 性能
    performance: {
        maxEntrypointSize: 300000,
        hints: 'warning'
    },
};

module.exports = config;