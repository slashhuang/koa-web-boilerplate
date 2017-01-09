/**
 * Created by huangxiaogang on 17/1/5.
 */
import { successToJson,errorToJson } from '../../response';
import {  S_cityList,S_townList } from '../../services/common/index.js';
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
            let query  = ctx.query;
            let cityList = await S_cityList({
                provinceId:2
            });
            if(query['provinceId']){
                successToJson(ctx,cityList)
            }else{
                errorToJson(ctx,400,'缺少provinceId参数');
            }
        }
    },
    {
        description: '根据区域Id获取板块列表',
        serviceApi:'/common/townList.action?cityId=2',
        doc:'http://wiki.superjia.com/confluence/pages/viewpage.action?pageId=11160697',
        method: 'get',
        url: '/townList.action',
        action: async function(ctx, next) {
            let query  = ctx.query;
            let townList = await S_townList({
                cityId:2
            });
            if(query['cityId']){
                successToJson(ctx,townList)
            }else{
                errorToJson(ctx,400,'缺少cityId参数');
            }
        }
    }
];


export { actions, resourceName, describe };