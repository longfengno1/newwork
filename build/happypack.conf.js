const os = require('os');
const HappyPack = require('happypack');

const happyThreadPool = HappyPack.ThreadPool({
    size: os.cpus().length
});

module.exports = [
    new HappyPack({
        id: 'js-loader',
        loaders: ['babel-loader'],
        threadPool: happyThreadPool,
        verbose: true,
    }),
];
