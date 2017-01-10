/**
 * Created by huangxiaogang on 17/1/9.
 */
import Client from '../../request.js';

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
        if(process.env['NODE_mock']=='mock'){
            let mock = {
                cityName:'上海',
                cityId:'1122'
            };
            return [mock];
        }
        return data;
    }).catch((err)=>{
        console.log('--err--',err);
    })
};
//根据区域Id获取板块列表
let S_townList = async function(params){
    return apiInstance.fetch({
        url:'townList',
        method:'get',
        params
    }).then((data)=>{
        if(process.env['NODE_mock']=='mock'){
            return [{
                townName:'虹口足球场',
                townId:'112'
            }]
        }
        return data
    });
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
        if(process.env['NODE_mock']=='mock'){
            let mock =[{
                estateName:'七韵美地苑',
                estateId:1111
            }];
            return mock;
        }
        return data
    });
};
module.exports = {
    S_cityList,
    S_townList,
    S_estateList
};