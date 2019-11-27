const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';
const path = require('path');
const resolve = file => path.resolve(__dirname, file);

const rules = [{
		test: /\.(css|scss|sass)$/,
		use: [
			devMode ? 'style-loader' : {
				loader: MiniCssExtractPlugin.loader,
				options: {
					publicPath: '../'
				}
			},
			// 'style-loader',
			'css-loader',
			'postcss-loader',
			'sass-loader',
		]
	},
	{
		test: /\.js$/,
		use: ["babel-loader"],
		exclude: "/node_modules/"
	}, {
		test: /\.(png|jpg|gif)$/,
		include: [resolve("../src")],
		use: [{
			loader: "url-loader",
			options: {
				limit: 10, //小于这个时将会已base64位图片打包处理
				outputPath: "images",
				name: "[name].[ext]"
			}
		}]
	},
	{
		test: /\.(woff|svg|eot|ttf|ttc)\??.*$/,
		include: [resolve('../src/font')],
		loader: 'url-loader?name=font/[name].[ext]',
	},
	{
		test: /\.html$/,
		// html中的img标签
		include: [resolve("../src")],
		use: ["html-withimg-loader"]
	}
];
module.exports = rules;
