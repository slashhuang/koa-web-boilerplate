/*
 * @Author slashhuang
 */
module.exports = (projectName)=>{
    return {
        /**
         * 静态资源配置
         */
        staticConfigs: {
            staticResourceURL:`http://house-test-water.oss.aliyuncs.com/resource/${projectName}_test/staticResource.properties`,
            staticResourceConfigURL:`http://house-test-water.oss.aliyuncs.com/resource/${projectName}_test/staticResourceConfig.properties`,
            //开发环境配置选项
            devResourceURL: `http://127.0.0.1/${projectName}/`
        },
        //租赁服务
        rentSOA:'http://rentsoa.iwjwtest.com',
        //请求转发
        //proxyTarget:"http://192.168.1.35:1313",
        proxyTarget:'http://rentsoa.iwjwtest.com',

        "WEBSITE": "http://127.0.0.1:7000"
    };
};


