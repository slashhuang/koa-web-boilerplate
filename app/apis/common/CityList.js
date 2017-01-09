/**
 * Created by huangxiaogang on 17/1/5.
 */
import { successToJson,errorToJson } from '../../response';
const resourceName = 'common';
const describe = '产品分类';
const actions = [{
        description: '根据城市Id获取该城市所属的区域列表',
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
            if(query['provinceId']){
                successToJson(ctx, [{
                    cityName:'上海',
                    cityId:'1122'
                }])
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