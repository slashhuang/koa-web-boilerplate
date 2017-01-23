/**
 * Created by huangxiaogang on 17/1/9.
 * 登录相关接口
 */
import { successToJson,errorToJson } from '../../response';
import {
    S_sendVerifyCode,
    S_checkVerifyCode,
    S_logout
} from '../../services/index.js';
const resourceName = 'user';
const describe = '用户登录注册登出';
const actions = [{
    description: '发送验证码',
    serviceApi:'post /user/sendVerifyCode.do',
    url: '/sendVerifyCode.action',
    /**
     * @request
     *{
     * mobile : "xxxxx" // 手机号
     }
     */
    action: async function(ctx) {
        let { mobile } = ctx.request.body;
        return await S_sendVerifyCode({
            mobile
        });
    }
},
    {
        description: '根据手机号+收到的验证码获取后台登录密码',
        serviceApi:'POST /user/getPassword',
        url: '/getPassword.action',
        method:'post',
        /**
         * @request
         *   {
                mobile:"xxxx",
                verfifyCode:"s5fy8s"
            }
         */
        action: async function(ctx) {
            let { mobile,verifyCode } = ctx.request.body;
            return  await S_checkVerifyCode({
                mobile,
                verifyCode
            });
        }
    },
    {
        description: '用户登录',
        serviceApi:'GET /user/logout.do',
        url: '/logout.action',
        method:'get',
        /**
         *
         */
        action: async function(ctx, next) {
            return  await S_logout();
        }
    }
];

export { actions, resourceName, describe };
