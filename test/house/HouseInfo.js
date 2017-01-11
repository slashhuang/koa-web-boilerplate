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
import { M_listParam,M_detailParam } from './data.js';
let actions = {
    houseDetail : '/house/detail.do',
    houseList : ' /house/list.action'
};

/**
 * 房源详情
 * id：房源或者房间Id
 * idType 1：房源；2：房间
 */
describe('get house detail', function() {
    it(`${actions['houseDetail']} should work`, function(done) {
        (async ()=>{

            let houseDetail = await S_houseDetail(M_detailParam);
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
            let houseList = await S_houseList(M_listParam);
            done()
        })()
    });
});
