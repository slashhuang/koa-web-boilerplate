
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
    },{
        mock: M_cityList
    })
};
//根据区域Id获取板块列表
let S_townList = async function(params){
    return apiInstance.fetch({
        url:'townList',
        method:'get',
        params
    },{
        mock: M_townList
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
    },{
        mock: M_estateList
    });
};
module.exports = {
    S_cityList,
    S_townList,
    S_estateList
};