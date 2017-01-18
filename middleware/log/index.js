/*
 * @Author: enzo
 * @Date:   2016-11-30 11:08:34
 * @Last Modified by:   slashhuang
 * @Last Modified time: 2016-1-4 10:38:38
 */

const winston = require('winston');
const path = require('path');
const env = process.env['NODE_ENV'];

const fs = require('fs');
const dateUtils = require("date-utils").language("es");

const heartbeat = 1000 * 60;
const timeReg = 'YYYY-MM-DD';
var logTime = Date.now();

/**
 * 错误处理
 */
const error = function(msg = '这一个默认的错误msg', status = 500) {
    let err = new Error(msg);
    err.status = status;
    throw err;
};
const info = function(msg) {
    winston.info(msg)
};
const logger =   function(setting) {
    let { path, statusConf } = setting;
    if (!path) {
        throw new Error(`log path config is null`);
    }
    winston.add(winston.transports.File, {
        filename: path
    });
    // 一分钟轮询一次
    // 每天生成历史日志文件
    setInterval(() => {
        let today = new Date().toFormat(timeReg);
        let last = new Date(logTime).toFormat(timeReg);

        if (new Date(today).getTime() > new Date(last).getTime()) {
            let rename = path.replace('.log', `.${last}.log`);
            fs.rename(path, rename, () => {
                fs.writeFile(path, 'UTF-8');
                logTime = Date.now();
            });
        }

    }, heartbeat)

    return function(ctx, next) {
        return next()
            .then(()=>{
                // 重定向
                winston.info(`origin ${ctx.origin}\nip: ${ctx.ip}\nmethod:${ctx.method}\npath${ctx.path}`);
                if(ctx.status==404){
                    global.throw('redirecting to index ',404)
                }
            })
            .catch(err => {
                winston.error(err.name + '\n' + err.message + '\n' + err.stack);
                const { status } = err;
                if (status) {
                    status==404 && ctx.redirect('/');
                } else {
                    //系统错误
                    ctx.body = err.stack;
                    ctx.status = 500;
                }
            })
    }
};
export { logger, info, error }
