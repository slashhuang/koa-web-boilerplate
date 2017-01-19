
/**
 * Created by huangxiaogang on 17/1/9.  test
 */
import Client from '../../request.js';
import {  M_cityList, M_townList,M_estateList} from './mock.js';
class CommonApi extends Client{
    constructor(){
        super();
        this.actions = {
            cityList : '/common/cityList.action',
            townList : '/common/townList.action',
            estateList:'/common/estateList.action'
        }
    }
}
let apiInstance = new CommonApi();
//根据城市Id获取该城市所属的区域列表
let S_cityList = async function(params){
    return apiInstance.fetch({
        url:'cityList',
        method:'get',
        params
    }).then((data)=> {
        if(data['status']==-1){
            global.throw(data['msg'],400);
        }
        return data['data']
    }).catch((err)=>{
        if(process.env['NODE_mock']=='mock'){
            return M_cityList
        }
        return Promise.resolve({
            err:err.message
        });
    })
};
//根据区域Id获取板块列表
let S_townList = async function(params){
    return apiInstance.fetch({
        url:'townList',
        method:'get',
        params
    }).then((data)=>{
        if(data['status']==-1){
            global.throw(data['msg'],400);
        }
        return data['data']
    }).catch((err)=>{
        if(process.env['NODE_mock']=='mock'){
            return M_townList
        }
        return Promise.resolve({
            err:err.message
        });
    })
};
/**
 * keyword：查询关键字
 * @param params
 * @returns {*}
 * @constructor
 */
let S_estateList = async function(params){
    return apiInstance.fetch({
        url:'estateList',
        method:'get',
        params
    }).then((data)=>{
        if(data['status']==-1){
            global.throw(data['msg'],400);
        }
        return Promise.resolve(data['data']);
    }).catch((err)=>{
        if(process.env['NODE_mock']=='mock'){
            return M_estateList;
        }
        return Promise.resolve({
            err:err.message
        });
    });
};
module.exports = {
    S_cityList,
    S_townList,
    S_estateList
};