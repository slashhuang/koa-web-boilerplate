/**
 * Created by huangxiaogang on 17/1/6.
 * 房源列表
 */
import { successToJson,errorToJson } from '../../response';
const resourceName = 'common';
const describe = '产品分类';
const actions = [{
    description: '根据小区名称或者小区地址模糊查询小区列表',
    doc:'http://wiki.superjia.com/confluence/pages/viewpage.action?pageId=11160715',
    url: '/estateList.action',
    serviceApi:'/common/estateList.action?keyword=XXYY',
    action: async function(ctx, next) {
        let query  = ctx.query;
        if(query['keyword']){
            successToJson(ctx, [{
                estateName:'小区名称',
                estateId:1111
            }])
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
            if(query['provinceId']){
                successToJson(ctx, [{
                    townName:'虹口足球场',
                    townId:'112'
                }])
            }else{
                errorToJson(ctx,400,'缺少provinceId参数');
            }
        }
    }
];


export { actions, resourceName, describe };