const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const glob = require('glob');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const FirendlyErrorePlugin = require('friendly-errors-webpack-plugin');
//const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpackConfigBase = require('./webpack.base.conf');
const webpackConfigProd = {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: './js/[name].js',
        chunkFilename: './js/[name].js',
        publicPath: './',
    },
    devtool: 'none',
    plugins: [
        //删除dist目录
        new CleanWebpackPlugin({
            verbose: false,
            dry: false,
        }),
        new ProgressBarPlugin(),
        new FirendlyErrorePlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),
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
