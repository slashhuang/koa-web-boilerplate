/*
 * @Author: enzo
 * @Date:   2016-12-28 17:36:50
 * @Last Modified by:   enzo
 * @Last Modified time: 2016-12-28 17:36:50
 */
import {checkoutENV} from './util.js';

module.exports = {
    /**
     * 静态资源配置
     */
    staticConfigs:checkoutENV(),
    // 应用端口
    port: 80,

    "WEBSITE": "http://127.0.0.1:3000"
};