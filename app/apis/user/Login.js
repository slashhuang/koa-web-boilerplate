/**
 * Created by huangxiaogang on 17/1/23.
 * 登录相关
 */

import { successToJson,errorToJson } from '../../response';
import {  S_buildingList  } from '../../services/index.js';
const resourceName = 'user';
const describe = '登录相关接口';
const actions = [{
    description: '获取验证码',
    serviceApi:'/user/sendVerifyCode.do',
    doc:'http://wiki.superjia.com/confluence/pages/viewpage.action?title=V1.1&spaceKey=dev',
    url: '/sendVerifyCode.do',
    /**
     * @request
     *  mobile:手机号码
     * @response
     *
     * {
        status:1 // -1:失败,2:成功
        msg:"" // 消息
        data: "s5fy8s"// 返回数据
       }
     *
     */
    action: async function(ctx, next) {
        let { mobile } = ctx.body;
        let data = await S_buildingList({
            mobile
        });
        //抛错
        if(data.err){
            errorToJson(ctx,400,data.err);
        }else {
            successToJson(ctx, data)
        }
    }
}
];

export { actions, resourceName, describe };