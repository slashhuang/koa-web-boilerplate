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
            getPassword:'/user/getPassword',
            checkPassword:'/user/checkPassword.do',
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
let S_getPassword = async function(params){
    return apiInstance.fetch({
        url:'getPassword',
        method:'post',
        data:params
    },{
        mock:"Mi2x0a" //返回密码
    })
};
/**
 * 验证密码
 */
let S_checkPassword = async function(params){
    return apiInstance.fetch({
        url:'checkPassword',
        method:'post',
        data:params
    },{
        mock:"密码成功" //返回密码
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
    S_getPassword,
    S_checkPassword,
    S_logout
};