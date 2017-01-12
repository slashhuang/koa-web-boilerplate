import fs from "fs-extra";
import _ from "lodash";
const ANNOTATION_G_RE = /\s*#[^\n]*/g;
/**
 * 
 * 
 * @export
 * @param {any} str
 * @returns {JSON}
 */
export function propToJson(str){
    let jsonObj = {};
    str = str.replace(ANNOTATION_G_RE,"").split("\n");
    str.forEach(function(e) {
        let arr;
        e = e.trim();
        if(e){
            arr = e.split("=");
            jsonObj[arr[0]] = arr[1];
        }
    });
    return jsonObj;
}
/**
 * 
 * @description properties file to JSON object
 * @export
 * @param {any} path
 * @returns
 */
export function propFileToJson(path){
    return new Promise((resolve,reject) => {
        if(!fs.existsSync(path)){
            let e = new Error("the properties file (path:" + path + ") is not exists.");
            reject(e);
        };
        fs.readFile(path, 'utf8', (err, data) => {
            if(err)reject(err);
            resolve(propToJson(data));
        })
    });
}
/**
 * 
 * @description  properties file to JSON object (sync)
 * @export
 * @param {any} path
 * @returns
 */
export function propFileToJsonSync(path){
    let jsonObj = {};
    if(!fs.existsSync(path))return jsonObj;
    return propToJson(fs.readFileSync(path,'utf8'));
}
/**
 * 
 * @description  properties file to JSON file
 * @export
 * @param {any} src
 * @param {any} dst
 * @returns
 */
export function propFileToJsonFile(src,dst){
    return new Promise((resolve,reject) => {
        if(_.isEmpty(dst)){
            let e = new Error("The directory where json is output is null");
            reject(e);
        }
        let json = JSON.stringify(propFileToJson(src));
        fs.outputFile(dst,json,'utf8',(err) => {
            if(err){
                reject(err);
            }
            resolve();
        });
    });
    
}
/**
 * 
 * @description  properties file to JSON file (sync);
 * @export
 * @param {any} src
 * @param {any} dst
 */
export function propFileToJsonFileSync(src,dst){
    if(_.isEmpty(dst))throw new Error("The directory where json is output is null");
    let json = JSON.stringify(propFileToJson(src));
    try {
        fs.outputFileSync(dst,json,'utf8');
    } catch (error) {
        throw new Error("The directory where json is output is incorrect");
    }
}

