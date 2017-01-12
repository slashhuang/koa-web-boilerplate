/**
 * Created by huangxiaogang on 17/1/9.
 * 上传图片接口
 */
import { successToJson,errorToJson } from '../../response';
const resourceName = 'common';
const describe = '上传图片';
/*表单处理模块*/
import formidable from 'formidable';
const util = require('util');
const httpProxy = require('http-proxy');

//创建proxy转发request到图片服务器
const proxy = httpProxy.createProxyServer();

const argv = require('yargs').argv;
const { proxyTarget } = global._appConfig;


const actions = [{
        description: '上传图片',
        doc:'http://wiki.superjia.com/confluence/pages/viewpage.action?pageId=11160794',
        url: '/uploadImage.action',
        method:'post',
        serviceApi:'/common/uploadImage.do',
        action: async function(ctx, next) {
            //默认采用请求转发的方式
            if(!argv['proxyPort']){
                await new Promise((resolve,reject)=>{
                    //非dev环境下，将url切换成soa地址
                    console.log('url is '+ ctx.url);
                    console.log(`---- proxy to target ${proxyTarget}`);
                    if(process.env['NODE_ENV']!='dev'){
                        ctx.url = '/common/uploadImage.do'
                    }
                    console.log(`--- proxy to ${proxyTarget}${ctx.url}`)
                    proxy.web(ctx.req, ctx.res, {
                        target: proxyTarget
                    });
                    console.log(' ----- proxy passed');
                });
            }else{
                //本地模拟图片上传
                let form = new formidable.IncomingForm(),
                    fields = {};
                await new Promise((resolve)=>{
                    form.uploadDir = 'TEST_TMP';
                    form.keepExtensions = true;
                    form.maxFieldsSize = 10 * 1024;
                    form
                        .on('field', function(field, value) {
                            fields[field]= value;
                        })
                        .on('file', function(field, file) {
                            fields[field]= file;
                        })
                        .on('end', function() {
                            console.log('-> upload done');
                            resolve();
                        });
                    form.parse(ctx.req);
                });
                successToJson(ctx,{
                    msg: '图片上传成功',
                    ...fields
                });
            }
        }
    }
];


export { actions, resourceName, describe };