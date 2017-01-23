/**
 * Created by huangxiaogang on 17/1/9.
 * 登录相关接口
 */
import Client from '../../request.js';
import {
    M_customerDetail,
    M_customerList
} from './mock.js';
class CommonApi extends Client{
    constructor(){
        super();
        this.actions = {
            customerList : '/customer/getAll.do',
            customerDetail:'/customer/detail.do'
        }
    }
}
let apiInstance = new CommonApi();
/**
 * 获取客户列表
 * @return 见mock数据
 */
let S_customerList = async function(){
    return apiInstance.fetch(
        {
            url:'customerList'
        },{
            mock: M_customerList//客户数据
        })
};
/**
 * 获取客户详情
 *  *{
	userId : // 客户主键
 * }
 */
let S_customerDetail = async function(params){
    return apiInstance.fetch({
        url:'customerDetail',
        method:'post',
        data:params
    },{
        mock:M_customerDetail //返回密码
    })
};
module.exports = {
    S_customerList,
    S_customerDetail
};