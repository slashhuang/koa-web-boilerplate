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
    return apiInstance.fetch(queryArgs)
        .then((data)=> {
            if(data['status']==-1){
                global.throw(data['msg'],400);
            }
            return data['data']
        }).catch((err)=>{
            if(process.env['NODE_mock']=='mock'){
                return M_subEstateDetail;
            }
            Promise.reject(err);
        })
};
module.exports = {
    S_estateDetail
};