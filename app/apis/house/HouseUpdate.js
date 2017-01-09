/**
 * Created by huangxiaogang on 17/1/9.
 * 更新房源详情页面
 */
import { successToJson,errorToJson } from '../../response';
const resourceName = 'house';
const describe = '更新房源明细';
const actions = [
    {
        description: '更新房源信息',
        serviceApi:'POST /house/update.do',
        url: '/update.action',
        /**
         * @request
         * 详情返回数据结构的shape
         *
         * @response
         * @param ctx
         * @param next
         */
        action: async function(ctx, next) {
            let mockData={
                status:'',
                "msg":'',
                data:{
                }
            };
            successToJson(ctx, mockData)
        }
    }
];


export { actions, resourceName, describe };