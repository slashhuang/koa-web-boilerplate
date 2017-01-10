/**
 * Created by huangxiaogang on 17/1/6
 * 添加房源
 * 删除
 * 更新房源
 */

import {
    S_houseDetail,
    S_houseList
} from '../../app/services/index.js';
let actions = {
    houseDetail : '/house/detail.do',
    houseList : ' /house/list.action'
};

/**
 * 房源详情
 * idType 1：房源；2：房间
 */
describe('get house detail', function() {
    it(`${actions['houseDetail']} should work`, function(done) {
        (async ()=>{
            let params = {
                id:2,
                idType:1
            };
            let houseDetail = await S_houseDetail(params);
            console.log(houseDetail);
            done()
        })()
    });
});
/**
 * 房源列表
 * 入参数
 * houseId：房源Id
 * @param params
 */
describe('get house list info', function() {
    it(`${actions['houseList']} should work`, function(done) {
        (async ()=>{
            let params = {
                cityId:'2',//区域Id。所有区域，传空或者不传
                townId:'2',//板块Id。某个区域下面的所有板块，传空或者不传
                estateId:'1',//小区Id。小区不限，传空或者不传
                rentType:0,//出租方式，0：整租；1：合租。出租方式不限，传空或者不传
                houseStatus:1,//房源状态，1：为出租；2：已出租。房源状态不限，传空或者不限
                startTime:'',//起始创建时间。起始时间不限，传空或者不传
                endTime:'',//终止创建时间。终止时间不限，传空或者不传
                houseManagerMobile:''//二房东的手机号。二房东手机号不限，传空或者不传
            };
            let houseList = await S_houseList(params);
            console.log(houseList);
            done()
        })()
    });
});
