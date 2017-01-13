// import fs from "fs";
import readline from "readline";
import axios from "axios";
import fs from "fs-extra";
import crypto from "crypto";
import _ from "lodash";
import { propFileToJsonSync } from "./properties-to-json";

const path = require('path');

const C_W_D = process.cwd();
const NODE_ENV = process.env['NODE_ENV'];

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

        //拉取状态控制变量
        this.isAutoReloadStaticResource = false;
        this.staticResourceMD5 = "";

        //静态资源文件路径
        this.static_resource_file_path = this.getLocalUrl(STATIC_RESOURCE_NAME);
        this.static_config_file_path = this.getLocalUrl(STATIC_CONFIG_NAME);


        //清空目录
        fs.emptyDirSync(path.normalize(C_W_D+STATIC_PATH));
        //初始化静态目录
        fs.ensureDir("."+STATIC_PATH,(err)=>{
            if(err)console.log(err);
        });
        //基本的数据检查
        try{
            let staticConfigs = config.staticConfigs;
            if(!staticConfigs){
                throw new Error("staticConfigs error!");
            }
            this.staticResourceConfigURL = staticConfigs.staticResourceConfigURL;
            this.staticResourceURL = staticConfigs.staticResourceURL;
            if (this.isEmpty(this.staticResourceConfigURL) || this.isEmpty(this.staticResourceURL)) {
                throw Error("staticConfig properties error!");
            }
        }catch(e){
            global.throw(err,500);
            this.errorHandler=err;
        }
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
    /**
     * 加载staticResourceConfig.properties文
     * @memberOf PropertiesUtil
     */
    loadStaticResourceConfig(callback){
        let  static_resource_file_path = this.static_resource_file_path;
        let static_config_file_path = this.static_config_file_path;
        this.downloadToLocal(this.staticResourceConfigURL,static_resource_file_path).then(()=>{
            let newJson = propFileToJsonSync(static_resource_file_path);
            fs.writeJsonSync("."+STATIC_PATH + "staticResourceConfig.json",newJson);

            console.log("load file " + STATIC_CONFIG_NAME + " finish.");

            let tmpMD5 = newJson["staticResourceMD5Order"];
            this.isAutoReloadStaticResource = this.parseBool(newJson["autoReload"]);
            //如果本地存储的md5和远程的md5不同，或者本地没有文件，则进行后续property文件更新操作
            if(this.staticResourceMD5 != tmpMD5 || !fs.existsSync(static_config_file_path)){
                this.staticResourceMD5 = tmpMD5;
                callback && callback();
            }
        }).catch((err)=>{
            console.log(err) ;
        });
    }
    /**
     *
     * 加载staticResource.properties文件
     * @memberOf PropertiesUtil
     */
    loadStaticResource(){
        let static_config_file_path = this.static_config_file_path;
        //自动拉取或者文件不存在，则去更新信息
        if(this.isAutoReloadStaticResource){
            this.downloadToLocal(this.staticResourceURL,static_config_file_path).then(()=>{
                let resourceJson = propFileToJsonSync(static_config_file_path);
                fs.writeJsonSync("."+STATIC_PATH + "staticResource.json",resourceJson);
                console.log("load file " + STATIC_RESOURCE_NAME + " finish.");
            });
        }
    }
    downloadToLocal(url, local){
        return new Promise((resolve,reject)=>{
            axios.get(url).then((response)=>{
                console.log(`getting file from ${url}`)
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
        if(this.errorHandler){
            console.log('error happened , pull resource data from origin suspended--');
            return ;
        }
        console.log('------ start loading static resource info -------');
        this.loadStaticResourceConfig(()=>{
            this.loadStaticResource();
        });
        // 开发环境使用本地静态文件
        if (NODE_ENV != "dev") {
            // 每一分钟定时装载staticResourceConfig任务
            var setTimeLoad = ()=>{
                setTimeout(() => {
                    console.log('------ timeout check for  static resource -------');
                    this.loadStaticResourceConfig(()=>{
                        this.loadStaticResource();
                    });
                    setTimeLoad();
                },6*1000);
            };
            setTimeLoad();
        }
    }
}  
module.exports = new PropertiesUtil();