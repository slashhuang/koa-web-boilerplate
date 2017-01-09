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
        action: async function(ctx, next) {
            let query  = ctx.query;
            if(query['keyword']){
                successToJson(ctx, [{
                    estateName:'七韵美地苑',
                    estateId:1111
                }])
            }
        }
    }
];


export { actions, resourceName, describe };