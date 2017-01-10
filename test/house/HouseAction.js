/**
 * Created by huangxiaogang on 17/1/6
 * 添加房源
 * 删除
 * 更新房源
 */

import {S_deleteHouse,
        S_addHouse,
        S_updateHouse
} from '../../app/services/index.js';
/**
 * 添加房源
 */
//describe('update house', function() {
//    it(' /house/update.do should work', function(done) {
//        (async ()=>{
//            let houseData = await S_addHouse();
//            console.log(houseData);
//            done()
//        })()
//    });
//});
/**
 * 入参数
 * houseId：房源Id
 * @param params
 */
describe('delete house', function() {
    it('/house/delete.action should work', function(done) {
        (async ()=>{
            let houseData = await S_deleteHouse({
                houseId:1
            });
            console.log(houseData);
            done()
        })()
    });
});
