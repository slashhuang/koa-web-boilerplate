/**
 * Created by huangxiaogang on 17/1/9.
 * 删除房间
 * 添加房间
 */

import {S_deleteRoom,S_addRoom} from '../../app/services/index.js';
import { M_addRoom,M_deleteRoom } from './data.js';
const API = {
    addRoom : '/room/add.do',
    deleteRoom:'/room/delete.do'
};
/**
 *  删除房源
 */
describe('deleteRoom house---------', function() {
    it(`${API['deleteRoom']} should work`, function(done) {
        (async ()=>{
            let houseData = await S_deleteRoom(M_deleteRoom).then((data)=>{
                console.log('delete room',data);
                return data;
            });
            console.log('houseData',houseData);
            done()
        })()
    });
});
/**
 * 增加房间
 */
describe('add room ------', function() {
    it(`${API['addRoom']} should work`, function(done) {
        (async ()=>{
            let houseData = await S_addRoom(M_addRoom).then((data)=>{
                console.log('add room',data);
                return 1
            }).catch(err=>console.log(err));
            console.log('houseData',houseData);
            done()
        })()
    });
});