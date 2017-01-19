/**
 * Created by huangxiaogang on 17/1/11.
 * 楼栋信息
 */
import Client from '../../request.js';
import {  M_roomList } from './mock.js';
class CommonApi extends Client{
    constructor(){
        super();
        this.actions = {
            roomList : '/common/roomList.action'
        }
    }
}
let apiInstance = new CommonApi();
//根据城市Id获取该城市所属的区域列表
let S_buildingRoomList = async function(params){
    return apiInstance.fetch({
        url:'roomList',
        method:'get',
        params
    }).then((data)=> {
        if(data['status']==-1){
            global.throw(data['msg'],400);
        }
        return data['data']
    }).catch((err)=>{
        if(process.env['NODE_mock']=='mock'){
            return M_roomList;
        }
        return Promise.resolve({
            err:err.message
        });
    })
};
module.exports = {
    S_buildingRoomList
};