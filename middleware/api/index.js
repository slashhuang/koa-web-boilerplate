/*
 * @Author: enzo
 * @Date:   2016-11-08 15:02:53
 * @Last Modified by:   slashhuang
 * @Last Modified time: 2016-1-4 16:44:36
 */

const debug = require('debug')('rudy:router');

const router = require('koa-router')();
const path = require('path');
const fs = require('fs');
const util = require('../../utils/common.js');

const routerReg = /\/?(\w*).js/;
const methodReg = /([get|post|del|put]*):?(:?.*)/;
const jsfileReg = /([a-zA-Z0-9_\-]+)(\.js)$/;

module.exports = function(setting) {
    let { root, folder, website } = setting;
    if (!folder) {
        throw new Error('router setting folder');
    }
    root = root || '/';
    website = website || '//';
    let appRoot = path.resolve(`/${root}/`);
    // 资料列表
    let resourcesList = {};
    router.get(appRoot, (ctx, next) => {
        ctx.body = JSON.stringify(resourcesList);
    });
    // resources parse
    util.pathls(folder).forEach(function(filePath) {

        if (!jsfileReg.test(filePath) || filePath.indexOf('_') > -1 || !(/^[A-W]/.test(path.basename(filePath)))) {
            return;
        }
        // 加载子路由
        let apiList = require(filePath);
        let { actions, resourceName, describe } = apiList;
        let actionList = [];
        let subApiRoute = path.resolve(`${appRoot}/${resourceName}`);
        //子路由
        router.get(subApiRoute, (ctx, next) => {
            ctx.body = JSON.stringify(actionList);
        });
        //子路由collection
        resourcesList[`${resourceName}`] = {
            describe: describe || '未添加描述',
            href: `${website}${subApiRoute}`
        };
        //挂载handler
        actions && actions.map((item ) => {
            let { method, url, action } = item;
            method = method || 'get';
            let routerPath = path.normalize([appRoot,resourceName,url].join('/'));
            item.href = `${website}${routerPath}`;
            actionList.push(item);
            router[method](routerPath, action);
        })
    });
    return router.routes()
};