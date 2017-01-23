/**
 * Created by huangxiaogang on 17/1/11.
 * 根据小区Id获取小区子划分列表
 */
import { successToJson,errorToJson } from '../../response';
import {  S_estateDetail  } from '../../services/index.js';
const resourceName = 'common';
const describe = '楼栋信息';
const actions = [
    {
        description: '根据小区Id获取小区详情',
        doc:'hhttp://wiki.superjia.com/confluence/pages/viewpage.action?pageId=11160853',
        url: '/estateDetail.action',
        serviceApi:'/common/estateDetail.action?estateId=30',
        /**
         * @request
         * estateId:小区id
         * @response
         * {
         * "city":"黄浦区",
         * "cityId":3,
         * "estateId":28,
         * "estateName":"百汇公寓",
         * "subEstateList":[{"address":"陆家浜路468弄<div>","id":83489}],
         * "town":"蓬莱公园",
         * "townId":25
         * }
         * @param ctx
         * @param next
         */
        action: async function(ctx, next) {
            let {estateId} = ctx.query;
            let data = await S_estateDetail({
                estateId
            });
            return data;
        }
    }
];

export { actions, resourceName, describe };