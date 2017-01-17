/*
 * @Author: enzo
 * @Date:   2016-12-28 17:36:50
 * @Last Modified by:   enzo
 * @Last Modified time: 2016-12-28 17:36:50
 */
const projectName = 'iwjw-rent-platform';
module.exports = {
    /**
     * 静态资源配置
     */
    staticConfigs:{
        staticResourceURL:`http://iwjw-resource.oss-cn-hangzhou-internal.aliyuncs.com/${projectName}/staticResource.properties`,
        staticResourceConfigURL:`http://iwjw-resource.oss-cn-hangzhou-internal.aliyuncs.com/${projectName}/staticResourceConfig.properties`,
        //开发环境配置选项
        devResourceURL: `http://127.0.0.1/${projectName}/`
    },
    // 应用端口
    port: 80,

    "WEBSITE": "http://127.0.0.1:3000"
};