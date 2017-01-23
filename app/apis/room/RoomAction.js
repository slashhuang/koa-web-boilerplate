/**
 * Created by huangxiaogang on 17/1/9.
 * 房间动作
 */

import { successToJson,errorToJson } from '../../response';
import { S_deleteRoom,S_addRoom } from '../../services/index.js';
import {U_arrayToDecimal} from '../../util.js';
const resourceName = 'room';
const describe = '房间动作';
const actions = [{
        description: '根据房间主键删除房间',
        serviceApi:'/room/delete.do?id=xxx',
        doc:'http://wiki.superjia.com/confluence/pages/viewpage.action?pageId=11160707',
        url: '/delete.action',
        /**
         * @request
         * id：房间id
         */
        action: async function(ctx, next) {
            let { id } = ctx.query;
            return await S_deleteRoom({
                id
            })
        }
    },
    {
        description: '添加房间',
        serviceApi:'POST /room/add.do',
        doc:'http://wiki.superjia.com/confluence/pages/viewpage.action?pageId=11160724',
        url: '/add.action',
        method:'post',
        /**
         * @request
         *   fileUrls:图片文件地址数组
             roomNo：房间编号
             type:类型(1:主卧,2:次卧)
             spaceArea:面积
             orientation:朝向(1:东,2:西,3:南,4:北)
             rentPrice:租赁价格
             facilities://配套(01:带独立卫生间,10:带阳台)
             houseId:房源Id
         */
        action: async function(ctx, next) {
            let { body } = ctx.request;
            body['facilities'] = U_arrayToDecimal(body['facilities']);
            return  await S_addRoom(body);
        }
    }
];

export { actions, resourceName, describe };
