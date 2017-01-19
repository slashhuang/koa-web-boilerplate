/**
 * Created by huangxiaogang on 17/1/11.
 * 楼栋信息
 */
import Client from '../../request.js';
import {  M_buildingList } from './mock.js';
class CommonApi extends Client{
    constructor(){
        super();
        this.actions = {
            buildingList : '/common/buildingList.action'
        }
    }
}
let apiInstance = new CommonApi();
//根据子划分Id查询楼栋信息

let S_buildingList = async function(params){
    return apiInstance.fetch({
        url:'buildingList',
        method:'get',
        params
    }).then((data)=> {
        if(data['status']==-1){
            global.throw(data['msg'],400);
        }
        return data['data']
    }).catch((err)=>{
        if(process.env['NODE_mock']=='mock'){
            return M_buildingList['data'];
        }
        return Promise.resolve({
            err:err.message
        });
    })
};
module.exports = {
    S_buildingList
};