/*
 * @Author: enzo
 * @Date:   2016-11-07 18:56:35
 * @Last Modified by:   enzo
 * @Last Modified time: 2017-01-12 15:54:30
 * 配置信息都将挂在global对象下
 */


module.exports = {
    /**
     * 静态资源配置
     */




    staticConfigs: {
        staticResourceURL:'http://house-test-water.oss.aliyuncs.com/resource/iwjw-rent-platform_test/staticResource.properties',
        staticResourceConfigURL:'http://house-test-water.oss.aliyuncs.com/resource/iwjw-rent-platform_test/staticResourceConfig.properties',
        devResourceURL:  'http://127.0.0.1/iwjw-rent-platform/',

    //staticResourceURL: 'http://127.0.0.1/iwjw-rent-platform',
        datacollectUrl:''
    },

    rentSOA:'http://rentsoa.iwjwtest.com',

    //图片上传转发服务器
    proxyTarget:'http://rentsoa.iwjwtest.com',

    website: 'http://192.168.1.121:7000'
};