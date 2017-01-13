/**
 * Created by slashhuang on 17/1/13.
 */

const argv = require('yargs')['argv'];
//切换console和platform项目
exports.checkoutENV = ()=>{
    let projectName =  argv['project']?`iwjw-rent-${argv['project']}` : 'iwjw-rent-platform';
    console.log(`project -- ${projectName}`);
    return {
        staticResourceURL:`http://house-test-water.oss.aliyuncs.com/resource/${projectName}_test/staticResource.properties`,
        staticResourceConfigURL:`http://house-test-water.oss.aliyuncs.com/resource/${projectName}_test/staticResourceConfig.properties`,
        //开发环境配置选项
        devResourceURL: `http://127.0.0.1/${projectName}/`
    };
};