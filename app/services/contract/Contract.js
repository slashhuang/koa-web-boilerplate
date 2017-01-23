/**
 * Created by huangxiaogang on 17/1/9.
 * 登录相关接口
 */
import Client from '../../request.js';
import {
    M_contractDetail,
    M_contractList
} from './mock.js';
class CommonApi extends Client{
    constructor(){
        super();
        this.actions = {
            contractList : '/contract/list.do',
            contractDetail:'/contract/detail.do'
        }
    }
}
let apiInstance = new CommonApi();
/**
 * 获取合同列表
 * @return 见mock数据
 */
let S_contractList = async function(){
    return apiInstance.fetch(
        {
            url:'contractList'
        },{
            mock: M_contractList//客户数据
        })
};
/**
 * 获取合同详情
 * {
	id:合同主键
}
 */
let S_contractDetail = async function(params){
    return apiInstance.fetch({
        url:'contractDetail',
        method:'post',
        data:params
    },{
        mock:M_contractDetail //返回密码
    })
};
module.exports = {
    S_contractList,
    S_contractDetail
};