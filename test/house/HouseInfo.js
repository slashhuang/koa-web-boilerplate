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
            let houseList = await S_houseList({
                houseId:1
            });
            console.log(houseList);
            done()
        })()
    });
});
