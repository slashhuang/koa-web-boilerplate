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
import { M_addHouse,M_deleteParam } from './data.js';
const API = {
    deleteHouse : '/house/delete.action',
    addHouse: '/house/add.action',
    updateHouse: '/house/update.do'
};
/**
 * 添加房源
 */
describe('add house----------', function() {
    it(`${API['addHouse']} should work`, function(done) {
        (async ()=>{
            let houseData = await S_addHouse(M_addHouse).then((data)=>{
                console.log('update house',data);
                return data;
            });
            console.log('houseData',houseData);
            done()
        })()
    });
});
/**
 * 更新房源
 */
describe('update house ------', function() {
    it(`${API['updateHouse']} should work`, function(done) {
        (async ()=>{
            let houseData = await S_updateHouse(M_addHouse).then((data)=>{
                console.log('update house',data);
                return 1
            });
            console.log('houseData',houseData);
            done()
        })()
    });
});
/**
 * 入参数
 * houseId：房源Id
 * @param params
 */
describe('delete house -------', function() {
    it(`${API['deleteHouse']} should work`, function(done) {
        (async ()=>{
            let houseData = await S_deleteHouse(M_deleteParam).then((err)=>{
                console.log('delete house',err);
                return 1
            });
            console.log(houseData);
            done()
        })()
    });
});
