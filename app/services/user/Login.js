/**
 * Created by huangxiaogang on 17/1/9.
 * 登录相关接口
 */
import Client from '../../request.js';

class CommonApi extends Client{
    constructor(){
        super();
        this.actions = {
            sendVerifyCode : '/user/sendVerifyCode.do',
            checkVerifyCode:'/user/checkVerifyCode.do',
            logout:'/user/logout.do'
        }
    }
}
let apiInstance = new CommonApi();
/**
 * 发送验证码
 * @return 见mock数据
 */
let S_sendVerifyCode = async function(params){
    return apiInstance.fetch(
        {
            url:'sendVerifyCode',
            method:'post',
            data:params
        },{
            mock: "s5fy8s"//返回验证码
        })
};
/**
 * 获取密码
 */
let S_checkVerifyCode = async function(params){
    return apiInstance.fetch({
        url:'checkVerifyCode',
        method:'post',
        data:params
    },{
        mock:"密码成功" //验证
    })
};
/**
 * 退出登录
 */
let S_logout = async function(params){
    return apiInstance.fetch({
        url:'logout',
        method:'get'
    },{
        mock:"登出成功" //返回密码
    })
};
module.exports = {
    S_sendVerifyCode,
    S_checkVerifyCode,
    S_logout
};