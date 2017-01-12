/*
 * @Author: enzo
 * @Date:   2016-11-08 11:39:58
 * @Last Modified by:   enzo
 * @Last Modified time: 2017-01-12 14:30:09
 */
const baseConfig = {

    // 应用端口
    port: 7000,

    // 测试端口
    testPort: 3001,

    // 接口超时时间
    timeout: 5000,

    // api site
    website: 'http://127.0.0.1:3000',
};


module.exports = function config(env) {

    env = env || 'dev';

    let configFile = require('./conf/' + env + '.config.js');
    let statusConf = require('./http_code/status.config');

    return Object.assign(baseConfig, configFile, { status: statusConf });
};