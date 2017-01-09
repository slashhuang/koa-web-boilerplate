/**
 * Created by huangxiaogang on 17/1/9.
 * 房间动作
 */

import { successToJson,errorToJson } from '../../response';
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
         * @response
         * null
         * @param ctx
         * @param next
         */
        action: async function(ctx, next) {
            let { id } = ctx.query;
            successToJson(ctx, {
                room:id
            })
        }
    },
    {
        description: '添加房间',
        serviceApi:'POST /room/add.do',
        doc:'http://wiki.superjia.com/confluence/pages/viewpage.action?pageId=11160724',
        url: '/add.action',
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
         * @response
         *  "status"://状态
             "msg":"添加成功",
             "data":null
         * @param ctx
         * @param next
         */
        action: async function(ctx, next) {
            let { id } = ctx.query;
            successToJson(ctx, {
                room:id
            })
        }
    }
];

export { actions, resourceName, describe };
