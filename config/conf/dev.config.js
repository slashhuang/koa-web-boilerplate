/*
 * @Author slashhuang
 */
import {checkoutENV} from './util.js';
module.exports = {
    /**
     * 静态资源配置
     */
    staticConfigs: checkoutENV(),
    //租赁服务
    rentSOA:'http://rentsoa.iwjwtest.com',
    //请求转发
    //proxyTarget:"http://192.168.1.35:1313",
    proxyTarget:'http://rentsoa.iwjwtest.com',

    "WEBSITE": "http://127.0.0.1:3000"
};