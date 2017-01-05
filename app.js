/**
 * Created by huangxiaogang on 17/1/5.
 * 主程序入口
 */
const debug = require('debug')('rudy:server');

// 获取配置文件
const config = require('./config/index.js')(process.env['NODE_ENV']);

// 挂载全局配置
global._appConfig = config;

// 错误日志处理
global._throw = function(msg = '这一个默认的错误msg', status = 500) {
    let err = new Error(msg);
    err.status = status;
    throw err;
};

const app = require('./bin/app');
const server = require('http').createServer(app.callback());

server.listen(config.port);

console.log('启动端口' + config.port);