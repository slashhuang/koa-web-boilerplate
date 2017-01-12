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
        staticResourceConfigURL:'http://house-test-water.oss.aliyuncs.com/resource/iwjw-pc_test/staticResourceConfig.properties',
        staticResourceURL:'http://house-test-water.oss.aliyuncs.com/resource/iwjw-pc_test/staticResource.properties',
        //staticResourceURL: 'http://127.0.0.1/iwjw-rent-platform',
        datacollectUrl:''
    },
    rentSOA:'http://rentsoa.iwjwtest.com',

    //图片上传转发
    //proxyTarget:'http://rentsoa.iwjwtest.com',
    proxyTarget:'http://10.7.251.73:9090',

    website: 'http://192.168.1.121:7000'
};