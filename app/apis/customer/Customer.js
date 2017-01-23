/**
 * Created by huangxiaogang on 17/1/9.
 * 登录相关接口
 */
import { successToJson,errorToJson } from '../../response';
import {
    S_customerList,
    S_customerDetail
} from '../../services/index.js';
const resourceName = 'customer';
const describe = '客户信息获取';
const actions = [{
        description: '获取客户列表',
        serviceApi:'GET /customer/getAll.do',
        url: '/getAll.action',
        action: async function() {
            return await S_customerList();
        }
    },
    {
        description: '获取客户信息详情页',
        serviceApi:'POST /customer/detail.do',
        url: '/detail.action',
        method:'post',
        /**
         * @request
         * {
            userId : // 客户主键
        }*/
        action: async function(ctx) {
            let { userId } = ctx.request.body;
            return  await S_customerDetail({
                userId
            });
        }
    }
];

export { actions, resourceName, describe };
