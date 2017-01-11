/**
 * Created by huangxiaogang on 17/1/6
 * 查询房源明细
 * 查询房源列表
 */
import Client from '../../request.js';
import _ from 'lodash';
//数据模拟
import {M_houseDetail,M_houseList} from './mock.js'
class CommonApi extends Client{
    constructor(){
        super();
        this.actions = {
            houseDetail : '/house/detail.do',
            houseList : '/house/list.action'
        }
    }
}
let apiInstance = new CommonApi();

//根据城市Id获取该城市所属的区域列表
/**
 * 入参数
 * id：房源或者房间Id
 * idType：id的类别  1：房源；2：房间
 *
 * @param params
 */
let S_houseDetail = async function(params){
    if(!(_.has(params,'id') && _.has(params,'idType'))){
        global.throw('params missing args id and idType',400);
    }
    return apiInstance.fetch({
        url:'houseDetail',
        method:'get',
        params
    }).then((data)=> {
        if(data['status']==-1){
            global.throw(data['msg'],400);
        }
        return data['data'];
    }).catch((err)=>{
        if(process.env['NODE_mock']=='mock'){
            return M_houseDetail;
        }
        return Promise.reject(err);
    })
};
/**
 * 入参数
 *   cityId：区域Id。所有区域，传空或者不传
 townId：板块Id。某个区域下面的所有板块，传空或者不传
 estateId：小区Id。小区不限，传空或者不传
 rentType：出租方式，0：整租；1：合租。出租方式不限，传空或者不传
 houseStatus：房源状态，1：为出租；2：已出租。房源状态不限，传空或者不限
 startTime：起始创建时间。起始时间不限，传空或者不传
 endTime：终止创建时间。终止时间不限，传空或者不传
 *
 * @param params
 */
let S_houseList = async function(params){
    return apiInstance.fetch({
        url:'houseList',
        method:'get',
        params
    }).then((data)=> {
        if(data['status']==-1){
            global.throw(data['msg'],400);
        }
        return data['data'];
    }).catch((err)=>{
        if(process.env['NODE_mock']=='mock'){
            return M_houseList;
        }
        return Promise.reject(err);
    })
};
module.exports = {
    S_houseDetail,
    S_houseList
};

