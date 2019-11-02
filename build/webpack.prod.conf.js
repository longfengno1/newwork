const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const glob = require('glob');
//消除冗余的css
const purifyCssWebpack = require('purifycss-webpack');
// 清除目录等
const cleanWebpackPlugin = require('clean-webpack-plugin');
//4.x之后用以压缩
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
//4.x之后提取css
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const webpackConfigBase = require('./webpack.base.conf');
const webpackConfigProd = {
    mode: 'production', // 通过 mode 声明生产环境
    output: {
        path: path.resolve(__dirname, '../dist'),
        // 打包多出口文件
        // 生成 a.bundle.[hash].js  b.bundle.[hash].js
        filename: './js/[name].js',
        chunkFilename: './js/[name].chunk.js',
        publicPath: './',
    },
    devtool: 'none',
    optimization: {
        splitChunks: {
            minSize: 0,
            minChunks: 1,
            maxAsyncRequests: 50,
            maxInitialRequests: 30,
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -1,
                    chunks: 'all',
                    name: 'vendors'
                },
            }
        }
    },
    plugins: [
        //删除dist目录
        new cleanWebpackPlugin({
            // verbose Write logs to console.
            verbose: false, //开启在控制台输出信息
            // dry Use boolean "true" to test/emulate delete. (will not remove files).
            // Default: false - remove files
            dry: false,
        }),
        // 分离css插件参数为提取出去的路径
        new miniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[id].css',
        }),
        //压缩css
        // new OptimizeCSSPlugin({
        // 	cssProcessorOptions: {
        // 		safe: true
        // 	}
        // }),
        // 消除冗余的css代码
        // new purifyCssWebpack({
        //     paths: glob.sync(path.join(__dirname, '../src/pages/*/*.html')),
        // }),
    ],
    module: {
        rules: [],
    },
};

if (process.env.npm_config_report) {
    //打包后模块大小分析//npm run build --report
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
    webpackConfigProd.plugins.push(new BundleAnalyzerPlugin());
}
module.exports = merge(webpackConfigBase, webpackConfigProd);
