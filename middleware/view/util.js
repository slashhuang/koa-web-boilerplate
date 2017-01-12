/**
 * Created by huangxiaogang on 16/12/26.
 * 视图渲染工具类
 */
const path = require('path');
let { staticConfigs } = global._appConfig;
const STATIC_RESOURCE_NAME = "staticResource.properties";

let {
        staticResourceConfigURL,
        staticResourceURL,
        devResourceURL
    } = staticConfigs;

/**
 * 提供给ejs模板渲染的函数
 * 类似于后端以前的velocity getURL
 */
let MethodNameSpace = {

    getURL : (tagName)=>{
        try{
            //加载远程资源
            const staticJson = path.resolve(process.cwd(),`assets/resource/${STATIC_RESOURCE_NAME}`);
            console.log()
            let staticCollection = require(staticJson);
            return staticCollection[tagName]
        }catch(err){
            console.log('err----',err);
            //加载本地静态资源
            return devResourceURL + tagName;
        }
    }
};
/**
 * 基本工具类
 */
let addTemplate = function(source,tagOption){
    return Object.assign(source,tagOption)
};
let addConst = function(source){
    return Object.assign(source,staticConfigs)
};
let addMethods = function(source){
    return source.MethodNameSpace = MethodNameSpace
};
module.exports = {
    addMethods,
    addTemplate,
    addConst
};