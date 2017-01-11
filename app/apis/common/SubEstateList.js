/**
 * Created by huangxiaogang on 17/1/11.
 * 根据小区Id获取小区子划分列表
 */
import { successToJson,errorToJson } from '../../response';
import {  S_subEstateList  } from '../../services/index.js';
const resourceName = 'common';
const describe = '楼栋信息';
const actions = [{
    description: '根据子划分Id查询楼栋信息',
    serviceApi:'GET /common/subEstateList.action?estateId=30',
    doc:'http://wiki.superjia.com/confluence/pages/viewpage.action?pageId=11160853',
    url: '/subEstateList.action',
    /**
     * @request
     * estateId：小区Id
     * @response
     *
     {"data":[{"address":"中山南路1711号","id":83728}],"msg":"Ok","status":1}
     *
     * @param ctx
     * @param next
     */
    action: async function(ctx, next) {
        let { estateId } = ctx.query;
        try{
            let subEstateList = await S_subEstateList({
                estateId
            });
            successToJson(ctx,subEstateList)
        }catch(err){
            errorToJson(ctx,400,'服务器错误');
        }
    }
}
];

export { actions, resourceName, describe };