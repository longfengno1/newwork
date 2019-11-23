const path = require('path');
const webpack = require('webpack');
const glob = require('glob');
// html模板
const htmlWebpackPlugin = require('html-webpack-plugin');
//静态资源输出
const copyWebpackPlugin = require('copy-webpack-plugin');
const rules = require('./webpack.rules.conf.js');
const isProd = (process.env.NODE_ENV === 'production');
const happyConfig = require('./happypack.conf');
// 获取html-webpack-plugin参数的方法
let getHtmlConfig = function (name, chunks) {
    return {
        template: `./src/pages/${name}/index.html`,
        filename: `${name}.html`,
        hash: false, //开启hash  ?[hash]
        chunks: isProd ? ['vendors', ...chunks] : chunks,
        // 关闭
        minify: {
            collapseWhitespace: true,
            removeComments: true
        },
        meta: {
            'viewport': "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no,minimal-ui,viewport-fit=cover",
            'applicable-device': 'mobile',
            "format-detection": "telephone=no",
            "full-screen": "yes",
            "x5-fullscreen": "true"
        }
    };
};

//动态添加入口
function getEntry(PAGES_DIR) {
    var entry = {};
    //读取src目录所有page入口
    glob.sync(PAGES_DIR + '**/*.js').forEach(function (name) {
        var start = name.indexOf('pages/') + 4;
        var end = name.length - 3;
        var eArr = [];
        var n = name.slice(start, end);
        n = n.split('/')[1];
        eArr.push(name);
        entry[n] = eArr;
    });
    return entry;
}
let entrys = getEntry('./src/pages/');
module.exports = {
    entry: entrys,
    module: {
        rules: [...rules],
    },
    plugins: [
        ...happyConfig,
        // 全局暴露统一入口
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
        }),
        //静态资源输出
        // new copyWebpackPlugin([{
        //     from: path.resolve(__dirname, '../src/assets'),
        //     to: './assets',
        //     ignore: ['.*'],
        // }, ]),
    ],
};

//修改   自动化配置页面
var htmlArray = [];
Object.keys(entrys).forEach(function (element) {
    htmlArray.push({
        _html: element,
        title: '',
        chunks: [element],
    });
});

//自动生成html模板
htmlArray.forEach(element => {
    module.exports.plugins.push(
        new htmlWebpackPlugin(getHtmlConfig(element._html, element.chunks)),
    );
});
