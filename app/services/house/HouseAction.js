/**
 * Created by huangxiaogang on 17/1/6
 * 删除房源
 * 增加房源
 * 编辑房源
 */
import Client from '../../request.js';

class CommonApi extends Client{
    constructor(){
        super();
        this.actions = {
            deleteHouse : '/house/delete.action',
            addHouse: '/house/add.action',
            updateHouse: '/house/update.do'
        }
    }
}
let apiInstance = new CommonApi();
//根据城市Id获取该城市所属的区域列表
/**
 * 入参数
 * houseId：房源Id
 * @param params
 */
let S_deleteHouse = async function(params={}){
    return apiInstance.fetch({
        url:'deleteHouse',
        method:'get',
        params
    }).then((data)=> {
        if(data && data['status']!=-1){
            return data['data'];
        }
        global.throw((data && data['msg']) || '数据为空',400);
    }).catch((err)=>{
        if(process.env['NODE_mock']=='mock'){
            let mock = {
                msg:'删除成功'
            };
            return mock;
        }
        return Promise.resolve({
            err:err.message
        });
    })
};
//默认application/json;charset=utf-8
/**
 * 入参
 * buildingId:楼栋Id
 buildingName:楼栋名称
 estateId：小区Id
 rentPrice：租金
 spaceArea：房源面积
 bedroomSum：卧室数目,
 livingRoomSum：厅数,
 wcSum：卫生间数,
 decorateType：装修类型（1:毛坯；2:普装；3:精装；4:豪装）,
 orientation：朝向（1:东,2:西,3:南,4:北）,
 facilities：配套
 description：房源描述
 fileUrls:图片文件url数组
 rentType：1：整租；2：合租
 roomInfo：[
 spaceArea：面积
 orientation：朝向
 rentPrice：租赁价格
 facilities：配套设施
 type：房间类型，1：主卧；2：次卧
 fileUrls：图片文件Url数组
 ]
 * @constructor
 */
let S_addHouse = async function(params={}){
    console.log(params);
    //修正数据格式
    return apiInstance.fetch({
        url:'addHouse',
        method:'post',
        data:params
    }).then((data)=> {
        if(data['status']==-1){
            global.throw(data['msg'],400);
        }
        return data['data'];
    }).catch((err)=>{
        return Promise.resolve({
            err:err.message
        });
    })
};
/**
 * 参数和addHouse保持一致
 * @returns {*}
 * @constructor
 */
let S_updateHouse = async function(params={}){
    return apiInstance.fetch({
        url:'updateHouse',
        method:'post',
        data:params
    }).then((data)=> {
        if(data['status']==-1){
            global.throw(data['msg'],400);
        }
        return data['data'];
    }).catch((err)=>{
        return Promise.resolve({
            err:err.message
        });
    })
};
module.exports = {
    S_deleteHouse,
    S_addHouse,
    S_updateHouse
};



