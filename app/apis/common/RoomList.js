/**
 * Created by huangxiaogang on 17/1/11.
 * 根据楼栋Id查询室号
 */
import { successToJson,errorToJson } from '../../response';
import {  S_buildingRoomList  } from '../../services/index.js';
const resourceName = 'common';
const describe = '楼栋信息';
const actions = [{
        description: '根据城市Id获取该城市所属的区域列表',
        serviceApi:'/common/roomList.action?buildingId=2852',
        doc:'http://wiki.superjia.com/confluence/pages/viewpage.action?pageId=11160857',
        url: '/roomList.action',
        /**
         * @request
         * buildingId=2
         * @response
         * data":{1:["0101","0102","0103","0109","0113"],2:[]}
         *
         * @param ctx
         * @param next
         */
        action: async function(ctx, next) {
            let { buildingId } = ctx.query;
            try{
                let buildingList = await S_buildingRoomList({
                    buildingId
                });
                successToJson(ctx,buildingList)
            }catch(err){
                errorToJson(ctx,400,'服务器错误');
            }
        }
    }
];

export { actions, resourceName, describe };