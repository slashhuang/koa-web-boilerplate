/**
 * Created by huangxiaogang on 17/1/9.
 * 获取配置列表
 */
import {
    S_rebateTicketList,
    S_rebateTicketUpdate
} from '../../services/index.js';
const resourceName = 'user';
const describe = '获取配置信息';
const actions = [{
        description: '获取返利券的配置信息列表',
        serviceApi:'GET /rebateTicket/list.do',
        url: '/list.action',
        action: async function(ctx) {
            return await S_rebateTicketList();
        }
    },
    {
        description: '修改配置内容的值',
        serviceApi:'POST /rebateTicket/update.do',
        url: '/update.action',
        method:'post',
        /**
         * @request
         *  {
                id: // 配置项主键
                configValue : // 配置内容的值
            }
         */
        action: async function(ctx) {
            let { id,configValue } = ctx.request.body;
            return  await S_rebateTicketUpdate({
                id,
                configValue
            });
        }
    }
];

export { actions, resourceName, describe };
