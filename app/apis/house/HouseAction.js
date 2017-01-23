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
import {U_arrayToDecimal} from '../../util.js';


const resourceName = 'houseAction';
const describe = '房源动作';
const utilSpace={
    /*将facilities由数组转换为十进制数字*/
    changeArr_decimal:(params)=>{
        params['facilities'] = U_arrayToDecimal(params['facilities']);
        params['roomInfo'] = params['roomInfo'] && params['roomInfo'].map((infoObj)=>{
            infoObj['facilities'] = U_arrayToDecimal(infoObj['facilities']);
            return infoObj
        });
        return params;
    }
};
const actions = [
    {
        description: '删除指定的房源',
        serviceApi:'GET   /house/delete.action?id=XX',
        doc:'http://wiki.superjia.com/confluence/pages/viewpage.action?pageId=11160729',
        url: '/delete.action/',
        action: async function(ctx, next) {
            let { id } = ctx.query;
            return await S_deleteHouse({
                id
            });
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
            let postData = utilSpace.changeArr_decimal(params);
            return  await S_addHouse(postData);
        }
    },
    {
        description: '更新房源信息',
        serviceApi:'POST /house/update.do',
        doc:'http://wiki.superjia.com/confluence/pages/viewpage.action?pageId=11160754',
        url: '/update.action',
        method:'post',
        action: async function(ctx, next) {
            let params = ctx.request.body;
            let postData = utilSpace.changeArr_decimal(params);
            return  await S_updateHouse(postData);
        }
    }
];

export { actions, resourceName, describe };
