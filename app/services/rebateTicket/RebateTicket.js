/**
 * Created by huangxiaogang on 17/1/9.
 * 配置相关接口
 */
import Client from '../../request.js';
import {
    M_rebateDetail,
    M_rebateList
} from './mock.js';
class CommonApi extends Client{
    constructor(){
        super();
        this.actions = {
            rebateTicketList : '/rebateTicket/list.do',
            rebateTicketUpdate:'/rebateTicket/update.do'
        }
    }
}
let apiInstance = new CommonApi();
/**
 * 获取返利券的配置信息列表
 */
let S_rebateTicketList = async function(){
    return apiInstance.fetch(
        {
            url:'rebateTicketList'
        },{
            mock: M_rebateList//客户数据
        })
};
/**
 * 更新客户配置
 * {
	id: // 配置项主键
	configValue : // 配置内容的值
}
 */
let S_rebateTicketUpdate = async function(params){
    return apiInstance.fetch({
        url:'rebateTicketUpdate',
        method:'post',
        data:params
    },{
        mock:M_rebateDetail //返回密码
    })
};
module.exports = {
    S_rebateTicketList,
    S_rebateTicketUpdate
};