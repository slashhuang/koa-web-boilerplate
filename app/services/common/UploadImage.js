/**
 * Created by huangxiaogang on 17/1/9.
 * 图片上传
 * 这里采用直接转发request请求到SOA服务器的方式
 * @important 本文件暂时用不到
 */

import Client from '../../request.js';

class CommonApi extends Client{
    constructor(){
        super();
        this.actions = {
            uploadImg : '/common/uploadImage.do'
        }
    }
}
let apiInstance = new CommonApi();

let S_uploadImg = async function(){

    return apiInstance.fetch({
        url:'uploadImg',
        method:'post'
    }).then((data)=> data)
};

module.exports = {
    S_uploadImg
};
