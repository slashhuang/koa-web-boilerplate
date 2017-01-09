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
const proxy = httpProxy.createProxyServer({});

const argv = require('yargs').argv;


const actions = [{
        description: '上传图片',
        doc:'http://wiki.superjia.com/confluence/pages/viewpage.action?pageId=11160794',
        url: '/uploadImage.action',
        method:'post',
        serviceApi:'/common/uploadImage.do',
        action: async function(ctx, next) {
            if(!argv.proxyPort){
                proxy.web(ctx.req, ctx.res, { target: `http://127.0.0.1:${argv.proxyPort}` });
            }else{
                let form = new formidable.IncomingForm(),
                    fields = {};
                await new Promise((resolve,reject)=>{
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