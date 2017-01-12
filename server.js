/**
 * built by slashhuang
 * 主程序入口
 * 16.12.23
 */

if (process.env.NODE_ENV == 'dev' ||  process.env.NODE_ENV == 'test') {
    require("babel-register");
}

require('./app.js');
