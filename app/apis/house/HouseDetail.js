/**
 * Created by huangxiaogang on 17/1/9.
 * 房源详情页面
 */
import { successToJson,errorToJson } from '../../response';
const resourceName = 'house';
const describe = '查询房源明细';
const actions = [{
        description: '查询房源的详细信息',
        serviceApi:'GET /house/detail.do?id=xxx&&idType=yyy',
        url: '/detail.action',
        /**
         * @request
         * id：房源或者房间Id
           idType：id的类别。1：房源；2：房间
         *
         * @response
         * @param ctx
         * @param next
         */
        action: async function(ctx, next) {
            let query = ctx.query;
            let {
                cityId,
                townId,
                rentType,
                houseStatus } = query;
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