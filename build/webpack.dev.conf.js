const path = require('path');
const webpack = require("webpack");
const merge = require("webpack-merge");
const webpackConfigBase = require('./webpack.base.conf');
const webpackConfigDev = {
	mode: 'development', // 通过 mode 声明开发环境
	output: {
		path: path.resolve(__dirname, '../dist'),
		// 打包多出口文件
		// 生成 a.bundle.js  b.bundle.js
		filename: './js/[name].js',
		chunkFilename: './js/[name].chunk.js',
	},
	devServer: {
		contentBase: path.join(__dirname, "../src"),
		publicPath:'/',
		host: "127.0.0.1",
		port: "8089",
		compress: true, // 开启资源的 gzip 压缩
		overlay: true, // 浏览器页面上显示错误
		open: true, // 开启浏览器
		hot: true // 开启热更新
	},
	plugins: [
		//热更新
		new webpack.HotModuleReplacementPlugin(),
	],
	devtool: "cheap-module-eval-source-map", // 开启调试模式
	module: {
		rules: []
	},
}
module.exports = merge(webpackConfigBase, webpackConfigDev);
