/**
 * Created by huangxiaogang on 17/1/11.
 * 根据小区Id获取小区子划分列表
 */
import Client from '../../request.js';
import {  M_subEstateDetail } from './mock.js';
class CommonApi extends Client{
    constructor(){
        super();
        this.actions = {
            estateDetail : '/common/estateDetail.action'
        }
    }
}
let apiInstance = new CommonApi();
//根据小区Id获取小区子划分列表
let S_estateDetail = async function(params){
    let queryArgs = {
        url:'estateDetail',
        method:'get',
        params
    };
    return apiInstance.fetch(queryArgs,{
            mock: M_subEstateDetail
        })
};
module.exports = {
    S_estateDetail
};