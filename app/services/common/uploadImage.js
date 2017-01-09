/**
 * Created by huangxiaogang on 17/1/9.
 * 图片上传
 */

import Client from '../../request.js';

class CommonApi extends Client{
    constructor(){
        super();
        this.host = '127.0.0.1:3000';
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
