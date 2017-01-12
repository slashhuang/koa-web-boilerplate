/*
 * @Author: enzo
 * @Date:   2016-11-07 18:56:35
 * @Last Modified by:   slashhuang
 * @Last Modified time: 2016-12-29 16:10:29
 * 配置信息都将挂在global对象下
 */


module.exports = {
    /**
     * 静态资源配置
     */
    staticConfigs: {
        staticResourceConfigURL: 'http://',
        staticResourceURL: 'http://127.0.0.1/iwjw-rent-platform',
        datacollectUrl:'',
    },
    rentSOA:'http://rentsoa.iwjwtest.com',

    //图片上传转发
    proxyTarget:'127.0.0.1:8004',


    "WEBSITE": "http://127.0.0.1:3000"
};