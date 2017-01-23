/**
 * Created by huangxiaogang on 17/1/5.
 */
import {  S_cityList,S_townList,S_estateList,S_subEstateList } from '../../services/index.js';
const resourceName = 'common';
const describe = '产品分类';
const actions = [{
        description: '根据城市Id获取该城市所属的区域列表',
        serviceApi:'/common/cityList.action?provinceId=2',
        doc:'http://wiki.superjia.com/confluence/pages/viewpage.action?pageId=11160695',
        url: '/cityList.action',
    /**
     * @request
     * provinceId=2
     * @response
     * cityName：区域名称
       cityId：区域Id
     *
     * @param ctx
     * @param next
     */
        action: async function(ctx, next) {
            let { provinceId } = ctx.query;
            let data = await S_cityList({
                provinceId
            });
            return data
        }
    },
    {
        description: '根据区域Id获取板块列表',
        serviceApi:'/common/townList.action?cityId=2',
        doc:'http://wiki.superjia.com/confluence/pages/viewpage.action?pageId=11160697',
        method: 'get',
        url: '/townList.action',
        action: async function(ctx, next) {
            let {cityId} = ctx.query;
            let data = await S_townList({
                cityId
            });
            return data
        }
    },
    {
        description: '根据小区名称或者小区地址模糊查询小区列表',
        doc: 'http://wiki.superjia.com/confluence/pages/viewpage.action?pageId=11160715',
        url: '/estateList.action',
        serviceApi: '/common/estateList.action?keyword=XXYY',
        /**
         * @request
         * keyword:<string>
         * @response
         * {
     *  estateName:'七韵美地苑',
     *  estateId:1111
     * }
         * @param ctx
         * @param next
         */
        action: async function (ctx, next) {
            let {keyword} = ctx.query;
            let data = await S_estateList({
                keyword
            });
            return data;
        }
    }
];

export { actions, resourceName, describe };