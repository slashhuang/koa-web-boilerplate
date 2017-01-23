/**
 * Created by huangxiaogang on 17/1/9.
 * 登录相关接口
 */
import { successToJson,errorToJson } from '../../response';
import {
    S_contractList,
    S_contractDetail,
    S_contractAudit
} from '../../services/index.js';
const resourceName = 'contract';
const describe = '获取合同信息';
const actions = [{
    description: '合同信息列表',
    serviceApi:'GET /contract/list.do',
    url: '/list.action',
    action: async function() {
        return await S_contractList();
    }
},
    {
        description: '获取合同详情',
        serviceApi:'GET /contract/detail.do',
        url: '/detail.action',
        method:'get',
        /**
         * @request
         * {
                id:合同主键
            }
         */
        action: async function(ctx) {
            let {id } = ctx.query;
            return  await S_contractDetail({
                id
            });
        }
    },
    {
        description: '审核结果提交',
        serviceApi:'POSt /contract/audit.do',
        url: '/audit.action',
        method:'post',
        /**
         * {
            id: // 合同主键
            status : //审核结果(1:审核失败,2:审核成功)
            memo : "" //审核失败的原因
        }
         *
         */
        action: async function(ctx) {
            let { id,status,memo } = ctx.request.body;
            return  await S_contractAudit({ id,status,memo });
        }
    }
];

export { actions, resourceName, describe };
