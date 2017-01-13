/**
 * built by slashhuang
 * 主程序入口
 * 16.12.23
 */
if (process.env['NODE_DEV']== 'dev') {
    require("babel-register");
}

require('./app.js');
