/**
 * Created by huangxiaogang on 17/1/11.
 * 根据小区Id获取小区子划分列表
 */
import Client from '../../request.js';
import {  M_subEstateList } from './mock.js';
class CommonApi extends Client{
    constructor(){
        super();
        this.actions = {
            subEstateList : '/common/subEstateList.action'
        }
    }
}
let apiInstance = new CommonApi();
//根据小区Id获取小区子划分列表
let S_subEstateList = async function(params){
    return apiInstance.fetch({
        url:'subEstateList',
        method:'get',
        params
    }).then((data)=> {
        if(data['status']==-1){
            global.throw(data['msg'],400);
        }
        return data['data']
    }).catch((err)=>{
        if(process.env['NODE_mock']=='mock'){
            return M_subEstateList;
        }
        Promise.reject(err);
    })
};
module.exports = {
    S_subEstateList
};