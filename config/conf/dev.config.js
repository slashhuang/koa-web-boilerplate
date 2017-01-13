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

    "WEBSITE": "http://127.0.0.1:3000"
};