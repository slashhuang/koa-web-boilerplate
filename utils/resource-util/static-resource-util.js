// import fs from "fs";
import readline from "readline";
import axios from "axios";
import fs from "fs-extra";
import crypto from "crypto";
import _ from "lodash";
import { propFileToJsonSync } from "./properties-to-json";

const C_W_D = process.cwd();
const NODE_ENV = process.env['NODE_ENV'] || "dev";
const config = global._appConfig;

const ANNOTATION_G_RE = /\s*#[^\n]*/g;
const SPACE_H_OR_F_RE = /(^\s)|(\s$)/g;
const END_OF_EACH_LINE_RE = /(\S)[\s]*\n[\s]*(\S)/g;

const CONFIG_NAME = "staticConfig.properties";
const STATIC_RESOURCE_NAME = "staticResource.properties";
const STATIC_CONFIG_NAME = "staticResourceConfig.properties";
const STATIC_PATH = "/assets/resource/";

class PropertiesUtil{
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
    getLocalUrl(fileName){
        return C_W_D + STATIC_PATH + fileName;
    }
    parseBool(str){
        return typeof str ==="boolean" ? str : (typeof str === "string" && str.toLowerCase() === "true");
    }
    isEmpty(str){
        return !str || (typeof str === 'string' && !str.trim());
    }
    isEmptyObj(obj){
        return typeof obj === "object" && _.isEmpty(obj);
    }
    /**
     * 加载staticResourceConfig.properties文
     * @memberOf PropertiesUtil
     */
    loadStaticResourceConfig(callback){
        let localPh = this.getLocalUrl(STATIC_CONFIG_NAME);
        this.downloadToLocal(this.staticResourceConfigURL,localPh).then(()=>{
            let newJson = propFileToJsonSync(localPh);
            fs.writeJsonSync("."+STATIC_PATH + "staticResourceConfig.json",newJson); 
            this.tmpStaticResourceMD5 = newJson["staticResourceMD5Order"];
            this.isAutoReloadStaticResource = this.parseBool(newJson["autoReload"]);
            if(!this.isEmpty(this.staticResourceMD5) && this.staticResourceMD5 === this.tmpStaticResourceMD5){
                this.isAutoReloadStaticResource = false;
            }

            callback && callback()
            console.log("load file " + STATIC_CONFIG_NAME + " finish.");
        }).catch((err)=>{
            console.log(err) ;
        });
    }
    /**
     * 加载staticResource.properties文件
     * @returns
     * @memberOf PropertiesUtil
     */
    loadStaticResource(){
        let self = this;
        if(!this.isAutoReloadStaticResource && !this.isEmptyObj(this.staticResourceJSON)){
            console.log("load file " + STATIC_RESOURCE_NAME + " suspended.");
            return;
        }
        let localPath = this.getLocalUrl(STATIC_RESOURCE_NAME);
        
        if(this.isAutoReloadStaticResource || !fs.existsSync(localPath)){
            this.downloadToLocal(this.staticResourceURL,localPath).then(()=>{
                this.staticResourceJSON = propFileToJsonSync(localPath);
                self.staticResourceMD5 = self.tmpStaticResourceMD5;
                // console.log(this.staticResourceJSON);
                fs.writeJsonSync("."+STATIC_PATH + "staticResource.json",this.staticResourceJSON);
                console.log("load file " + STATIC_RESOURCE_NAME + " finish.");
            });
        }
        // let md5 = self.getMD5(localPath);
        if(!self.isEmpty(self.tmpStaticResourceMD5) && self.staticResourceMD5 !== self.tmpStaticResourceMD5){
            this.downloadToLocal(this.staticResourceURL,localPath).then(()=>{
                this.staticResourceJSON = propFileToJsonSync(localPath);
                self.staticResourceMD5 = self.tmpStaticResourceMD5;
                fs.writeJsonSync("."+STATIC_PATH + "staticResource.json",this.staticResourceJSON);
                console.log("load file " + STATIC_RESOURCE_NAME + " finish.");
            });
        }
        
    }
    downloadToLocal(url, local){
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
    // 拉取文件入口方法
    startLoadProperties(){
        let staticConfigs = config.staticConfigs;
        if(!staticConfigs){
            throw new Error("staticConfigs error!");
        }
        this.staticResourceConfigURL = staticConfigs.staticResourceConfigURL;
        this.staticResourceURL = staticConfigs.staticResourceURL;
        if (this.isEmpty(this.staticResourceConfigURL) || this.isEmpty(this.staticResourceURL)) {
            throw Error("staticConfig properties error!");
        }
        //初始化静态目录
        fs.ensureDir("."+STATIC_PATH,(err)=>{
            if(err)console.log(err);
        });
        this.loadStaticResourceConfig(()=>{
            this.loadStaticResource();
        });
        // 开发环境使用本地静态文件
        if (NODE_ENV !== "dev") {
            // 每一分钟定时装载staticResourceConfig任务

            var setTimeLoad = ()=>{
                this.__TIMER = setTimeout(() => {
                    this.loadStaticResourceConfig(()=>{
                        this.loadStaticResource();
                    });
                    setTimeLoad();
                },60*1000);
            };
            setTimeLoad();
        }
    }
}  
module.exports = new PropertiesUtil();