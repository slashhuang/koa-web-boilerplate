/*
 * @Author: slashhuang
 */
const projectName = 'iwjw-rent-platform';
module.exports = {
    /**
     * 静态资源配置
     */

    staticConfigs: {
        staticResourceURL:`http://house-test-water.oss.aliyuncs.com/resource/${projectName}_beta/staticResource.properties`,
        staticResourceConfigURL:`http://house-test-water.oss.aliyuncs.com/resource/${projectName}_beta/staticResourceConfig.properties`,
        //开发环境配置选项
        devResourceURL: `http://127.0.0.1/${projectName}/`
    },

    rentSOA:'http://rentsoa.iwjwbeta.com',

    //rentSOA:'http://10.7.251.73:9090',
    //proxyTarget:'http://10.7.251.73:9090',
    //proxyTarget:"http://192.168.1.35:1313",

    //图片上传转发服务器
    proxyTarget:'http://rentsoa.iwjwbeta.com',

    website: 'http://118.178.242.96:7000'
};