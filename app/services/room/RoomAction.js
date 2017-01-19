/**
 * Created by huangxiaogang on 17/1/9.
 * 删除房间
 * 添加房间
 */
import Client from '../../request.js';

class CommonApi extends Client{
    constructor(){
        super();
        this.actions = {
            addRoom : '/room/add.do',
            deleteRoom:'/room/delete.do'
        }
    }
}
let apiInstance = new CommonApi();
//根据城市Id获取该城市所属的区域列表
/**
 * 入参
 * id=xxx 房间主键删除房间
 * @param params
 * @returns {*}
 * @constructor
 */
let S_deleteRoom = async function(params){
    return apiInstance.fetch({
        url:'deleteRoom',
        method:'post',
        params
    }).then((data)=> {
        if(process.env['NODE_mock']=='mock'){
            let mock = {
               msg:'删除成功'
            };
            return [mock];
        }
        return data;
    })
};
/**
 * 入参数
 *   fileUrls:图片文件地址数组
     roomNo：房间编号
     type:类型(1:主卧,2:次卧)
     spaceArea:面积
     orientation:朝向(1:东,2:西,3:南,4:北)
     rentPrice:租赁价格
     facilities://配套(01:带独立卫生间,10:带阳台)
     houseId:房源Id
 *
 * @param params
 * @returns {*}
 * @constructor
 */

let S_addRoom = async function(params){
    return apiInstance.fetch({
        url:'addRoom',
        method:'post',
        params
    }).then((data)=> {
        if(data['status']==-1){
            global.throw(data['msg'],400);
        }
        return data['data'];
    }).catch((err)=>{
        global.log_info('err-----',err.message,'\n');
        return Promise.resolve({
            err:err.message
        });
    })
};
module.exports = {
    S_deleteRoom,
    S_addRoom
};