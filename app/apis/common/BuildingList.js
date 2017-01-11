/**
 * Created by huangxiaogang on 17/1/11.
 * 根据子划分Id查询楼栋信息
 */
import { successToJson,errorToJson } from '../../response';
import {  S_buildingList  } from '../../services/index.js';
const resourceName = 'common';
const describe = '楼栋信息';
const actions = [{
    description: '根据子划分Id查询楼栋信息',
    serviceApi:'/common/buildingList.action?subEstateId=80011',
    doc:'http://wiki.superjia.com/confluence/pages/viewpage.action?pageId=11160855',
    url: '/buildingList.action',
    /**
     * @request
     * subEstateId：子划分Id
     * @response
     *
     {"data":[{"buildingId":1,"buildingName":"2","buildingNameStr":"2号"}]
          *
     * @param ctx
     * @param next
     */
    action: async function(ctx, next) {
        let { subEstateId } = ctx.query;
        try{
            let buildingList = await S_buildingList({
                subEstateId
            });
            successToJson(ctx,buildingList)
        }catch(err){
            errorToJson(ctx,400,'服务器错误');
        }
    }
}
];

export { actions, resourceName, describe };