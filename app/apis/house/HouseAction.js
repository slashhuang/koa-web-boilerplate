/**
 * Created by huangxiaogang on 17/1/6.
 */

import { successToJson,errorToJson } from '../../response';
import {houseModel} from './houseModel.js';
const resourceName = 'house';
const describe = '房源动作';
const actions = [{
        description: '删除房源',
        serviceApi:'/house/delete.action?houseId=XX',
        doc:'http://wiki.superjia.com/confluence/pages/viewpage.action?pageId=11160729',
        url: '/delete.action',
        action: async function(ctx, next) {
            let { houseId } = ctx.query;
            successToJson(ctx, {
                houseId:houseId
            })
        }
    }
];

export { actions, resourceName, describe };
