/*
 * @Author: enzo
 * @Date:   2016-11-08 15:02:53
 * @Last Modified by:   slashhuang
 * @Last Modified time: 2016-1-11 16:44:36
 */

const debug = require('debug')('rudy:router');

const router = require('koa-router')();
const path = require('path');
const fs = require('fs');
const util = require('../../utils/common.js');

const routerReg = /\/?(\w*).js/;
const methodReg = /([get|post|del|put]*):?(:?.*)/;
const jsfileReg = /([a-zA-Z0-9_\-]+)(\.js)$/;


/*API 集合*/
let actionCollection={
    subAPIList:{},
    resourcesList:{},
    push(name,value){
        this.init(name).push(...value);
    },
    init(name){
        if(!Array.isArray(this.subAPIList[name])){
            this.subAPIList[name]=[];
        }
        return  this.subAPIList[name];
    }
};
module.exports = function(setting) {
    let { root, folder, website } = setting;
    if (!folder) {
        throw new Error('router setting folder');
    }
    root = root || '/';
    website = website || '//';
    let appRoot = path.resolve(`/${root}/`);
    router.get(appRoot, (ctx, next) => {
        ctx.body = JSON.stringify(actionCollection.resourcesList);
    });
    // resources parse
    util.pathls(folder).forEach(function (filePath) {
        //大写开头的文件标示为api文件
        if (!jsfileReg.test(filePath) || filePath.indexOf('_') > -1 || !(/^[A-W]/.test(path.basename(filePath)))) {
            return;
        }
        // 加载子路由
        let apiList = require(filePath);
        let { actions, resourceName, describe } = apiList;
        actionCollection.push(resourceName, actions);
        actionCollection.resourcesList[`${resourceName}`] = {
            describe: describe || '未添加描述',
            href: `${website}${path.resolve(`${appRoot}/${resourceName}`)}`
        };
        //实际的api路由层面
        actions && actions.map((item) => {
            let { method, url, action } = item;
            method = method || 'get';
            let routerPath = path.normalize([appRoot, resourceName, url].join('/'));
            item.href = `${website}${routerPath}`;
            router[method](routerPath, action);
        });
    });
    //api层面
    for (let subAPI in actionCollection.subAPIList) {
        let value = actionCollection.subAPIList[subAPI];
        router.get(`${appRoot}/${subAPI}`, (ctx, next) => {
            ctx.body = JSON.stringify(value);
        });
    }
    return router.routes()
};