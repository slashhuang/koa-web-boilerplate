/**
 * Created by huangxiaogang on 17/1/6
 * 添加房源
 * 删除
 * 更新房源
 */

import { successToJson,errorToJson } from '../../response';
import {S_deleteHouse,
        S_addHouse,
        S_updateHouse
} from '../../services/index.js';

const resourceName = 'houseAction';
const describe = '房源动作';
const actions = [
    {
        description: '删除指定的房源',
        serviceApi:'GET   /house/delete.action?id=XX',
        doc:'http://wiki.superjia.com/confluence/pages/viewpage.action?pageId=11160729',
        url: '/delete.action/',
        action: async function(ctx, next) {
            let { id } = ctx.query;
            try{
                let data = await S_deleteHouse({
                    id
                });
                successToJson(ctx,data);
            }catch(e){
                errorToJson(ctx,400,'服务器错误');
            }

        }
    },
    {
        description: '增加房源',
        serviceApi:'POST /house/add.do',
        doc:'http://wiki.superjia.com/confluence/pages/viewpage.action?pageId=11160731',
        url: '/add.action',
        method:'post',
        action: async function(ctx, next) {
            let params = ctx.request.body;
            try{
                let data = await S_addHouse(params);
                successToJson(ctx, data)
            }catch(e){
                errorToJson(ctx,400,'服务器错误');
            }
        }
    },
    {
        description: '更新房源信息',
        serviceApi:'POST /house/update.do',
        doc:'http://wiki.superjia.com/confluence/pages/viewpage.action?pageId=11160754',
        url: '/update.action',
        method:'post',
        action: async function(ctx, next) {
            try{
                let params = ctx.request.body;
                let data = await S_updateHouse(params);
                successToJson(ctx, data)
            }catch(e){
                errorToJson(ctx,400,'服务器错误');
            }
        }
    }
];

export { actions, resourceName, describe };
