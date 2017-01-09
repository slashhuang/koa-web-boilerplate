/**
 * Created by huangxiaogang on 17/1/6
 * 删除
 */

import { successToJson,errorToJson } from '../../response';
const resourceName = 'house';
const describe = '房源动作';
const actions = [{
        description: '删除指定的房源',
        serviceApi:'/house/delete.action?houseId=XX',
        doc:'http://wiki.superjia.com/confluence/pages/viewpage.action?pageId=11160729',
        url: '/delete.action',
    /**
     * @request
     * houseId：房源Id
     * @response
     * null
     * @param ctx
     * @param next
     */
        action: async function(ctx, next) {
            let { houseId } = ctx.query;
            successToJson(ctx, {
                houseId:houseId
            })
        }
    }
];

export { actions, resourceName, describe };
