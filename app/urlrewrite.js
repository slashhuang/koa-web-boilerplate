/*
 * @Author: enzo
 * @Date:   2016-11-08 11:40:08
 * @Last Modified by:   slashhuang
 * @Last Modified time: 2017-1-16 18:59:04
 */
import { successToView } from './response';

const router = require('koa-router')();

/**
 * 单页面应用入口
 */
router.get('/', (ctx) => {
    successToView(ctx, 'spa/index', {
        title: '首页哦',
        staticTag: 'index'
    });
});
router.get('/welcome', (ctx) => {
    successToView(ctx, 'another', {
        title: '欢迎各位使用koa-web-boilerplate',
        staticTag: 'index'
    });
});

module.exports = router;