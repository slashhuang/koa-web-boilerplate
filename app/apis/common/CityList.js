/**
 * Created by huangxiaogang on 17/1/5.
 */
import { successToJson,errorToJson } from '../../response';
const resourceName = '';
const describe = '产品分类';
const actions = [{
        description: '根据城市Id获取该城市所属的区域列表',
        url: '/cityList.action',
        serviceApi:'/common/cityList.action?provinceId=2',
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