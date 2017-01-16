/*
 * @Author: slashhuang
 */

import {checkoutENV} from './util.js';

module.exports = {
    /**
     * 静态资源配置
     */

    staticConfigs: checkoutENV(),

    rentSOA:'http://rentsoa.iwjwtest.com',

    //rentSOA:'http://10.7.251.73:9090',
    //proxyTarget:'http://10.7.251.73:9090',
    proxyTarget:"http://192.168.1.35:1313",

    //图片上传转发服务器
    //proxyTarget:'http://rentsoa.iwjwtest.com',

    website: 'http://192.168.1.121:7000'
};