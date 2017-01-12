// import fs from "fs";
import readline from "readline";
import axios from "axios";
import fs from "fs-extra";
import crypto from "crypto";
import _ from "lodash";
import {propFileToJsonSync} from "./properties-to-json";

const C_W_D = process.cwd();
const NODE_ENV = process.env['NODE_ENV'].toLowerCase() || "dev";
const config = require(C_W_D + '/config/conf')(NODE_ENV);

const ANNOTATION_G_RE = /\s*#[^\n]*/g;
const SPACE_H_OR_F_RE = /(^\s)|(\s$)/g;
const END_OF_EACH_LINE_RE = /(\S)[\s]*\n[\s]*(\S)/g;

const CONFIG_NAME = "staticConfig.properties";
const STATIC_RESOURCE_NAME = "staticResource.properties";
const STATIC_CONFIG_NAME = "staticResourceConfig.properties";
const STATIC_PATH = "/assets/resource/";

/**
 * 
 * 
 * @class PropertiesUtil
 */
class PropertiesUtil{
    /**
     * Creates an instance of PropertiesUtil.
     * 
     * 
     * @memberOf PropertiesUtil
     */
    constructor(){
        this.isAutoReloadStaticResource = false;
        this.staticResourceConfigURL = "";
        this.staticResourceURL = "";
        this.tmpStaticResourceMD5 = "";
        this.staticResourceMD5 = "";
        this.staticResourceJSON = {};
        this.__TIMER = {};
        let localProp = this.getLocalUrl(STATIC_RESOURCE_NAME);
        fs.ensureFileSync(localProp);
        this.staticResourceJSON = propFileToJsonSync(localProp);
    }
    /**
     * 
     * 根据文件名获取完整本地路径
     * @param {any} fileName
     * @returns string
     * 
     * @memberOf PropertiesUtil
     */
    getLocalUrl(fileName){
        return C_W_D + STATIC_PATH + fileName;
    }
    /**
     * 
     * string转换成bool类型
     * @param {any} str
     * @returns
     * 
     * @memberOf PropertiesUtil
     */
    parseBool(str){
        return typeof str ==="boolean" ? str : (typeof str === "string" && str.toLowerCase() === "true");
    }
    /**
     * 
     * 判断字符串为空
     * @param {any} str
     * @returns
     * 
     * @memberOf PropertiesUtil
     */
    isEmpty(str){
        return !str || (typeof str === 'string' && !str.trim());
    }
    /**
     * 
     * 判断空对象
     * @param {any} obj
     * @returns
     * 
     * @memberOf PropertiesUtil
     */
    isEmptyObj(obj){
        return typeof obj === "object" && _.isEmpty(obj);
    }
    /**
     * 
     * 加载staticResourceConfig.properties文件
     * 
     * @memberOf PropertiesUtil
     */
    loadStaticResourceConfig(){
        let self = this;
        let localPh = self.getLocalUrl(STATIC_CONFIG_NAME);
        self.downloadToLocal(self.staticResourceConfigURL,localPh).then(()=>{
            let newJson = propFileToJsonSync(localPh);
            self.tmpStaticResourceMD5 = newJson["staticResourceMD5"];
            self.isAutoReloadStaticResource = self.parseBool(newJson["autoReload"]);
            if(!self.isEmpty(self.staticResourceMD5) && self.staticResourceMD5 === self.tmpStaticResourceMD5){
                self.isAutoReloadStaticResource = false;
            }
            console.log("load file " + STATIC_CONFIG_NAME + " finish.");
        }).catch((err)=>{
            console.log(err) ;
        });
    }
    /**
     * 
     * 加载staticResource.properties文件
     * @returns
     * 
     * @memberOf PropertiesUtil
     */
    loadStaticResource(){
        let self = this;
        if(!self.isAutoReloadStaticResource && !self.isEmptyObj(this.staticResourceJSON)){
            console.log("load file " + STATIC_RESOURCE_NAME + " suspended.");
            return;
        }
        let localPath = self.getLocalUrl(STATIC_RESOURCE_NAME);
        
        if(self.isAutoReloadStaticResource || !fs.existsSync(localPath)){
            self.downloadToLocal(self.staticResourceURL,localPath).then(()=>{
                this.staticResourceJSON = propFileToJsonSync(localPath);
                console.log("load file " + STATIC_RESOURCE_NAME + " finish.");
            });
        }
        let md5 = self.getMD5(localPath);
        if(!self.isEmpty(self.tmpStaticResourceMD5) && md5 !== self.tmpStaticResourceMD5){
            return;
        }
        self.staticResourceMD5 = self.tmpStaticResourceMD5;
    }
    /**
     * 
     * 获取url对应文件的md5
     * @param {any} url
     * @returns
     * 
     * @memberOf PropertiesUtil
     */
    getMD5(url){
        if(!fs.existsSync(url)){
            reject();
            throw new Error("got md5 fail: file is not exists");
            return "";
        }
        var rfs = fs.readFileSync(url,'utf8');
        let str = rfs.replace(ANNOTATION_G_RE,"").trim().replace(END_OF_EACH_LINE_RE,"$1, $2");
        str = "{" + str + "}";
        var hash = crypto.createHash("md5");
        hash.update(str);
        let md5 = hash.digest('hex');
        return md5;
    }
    /**
     * 
     * 加载远程文件到本地
     * @param {any} 远程url
     * @param {any} 本地路径
     * @returns
     * 
     * @memberOf PropertiesUtil
     */
    downloadToLocal(url, local){
        let self = this;
        return new Promise((resolve,reject)=>{
            axios.get(url).then((response)=>{
                fs.outputFileSync(local,response.data);
                resolve(response.data);
            }).catch((err)=>{
                console.log(err);
                reject(err);
            });
        });
    }
    
    /**
     * 开始开启properties文件处理逻辑
     * @description start load properties files
     * 
     * @memberOf PropertiesUtil
     */
    startLoadProperties(){
        let self = this;
        let staticConfigs = config.staticConfigs;
        if(!staticConfigs){
            throw new Error("staticConfigs error!");
        }
        self.staticResourceConfigURL = staticConfigs["staticResourceConfigURL"];
        self.staticResourceURL = staticConfigs["staticResourceURL"];
        // contentUrlPre = staticConfigs["contentUrlPre"];

        if (self.isEmpty(self.staticResourceConfigURL) || self.isEmpty(self.staticResourceURL)) {
            throw Error("staticConfig properties error!");
        }

        //初始化静态目录
        fs.ensureDir("."+STATIC_PATH,(err)=>{
            if(err)console.log(err);
        });
        // 开发环境使用本地静态文件
        if (NODE_ENV !== "dev") {
            // 每一分钟定时装载staticResourceConfig任务
            self.loadStaticResourceConfig();
            self.loadStaticResource();
            /**
             * 
             */
            function setTimeLoad(){
                self.__TIMER = setTimeout(() => {
                    self.loadStaticResourceConfig();
                    self.loadStaticResource();
                    setTimeLoad();
                },60*1000);
            }
            setTimeLoad();
        }
    }
    /**
     * 
     * 根据properties中的key获取value，也就是完整路径
     * @param {any} key
     * @returns the key's value(url)
     * 
     * @memberOf PropertiesUtil
     */
    getURL(key){
        if(this.isEmptyObj(this.staticResourceJSON))return;
        if(!key)return "";
        if(NODE_ENV !== "prod" && arguments[1]){
            return arguments[1] + key;
        }else{
            if(NODE_ENV === "dev")return self.staticResourceURL + key;
            return this.staticResourceJSON[key] || "";
        }  
    }
}  
module.exports = new PropertiesUtil();