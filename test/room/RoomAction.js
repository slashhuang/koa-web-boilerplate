/**
 * Created by huangxiaogang on 17/1/9.
 * 删除房间
 * 添加房间
 */

import {S_deleteRoom,S_addRoom} from '../../app/services/index.js';
import { M_addHouse } from './data.js';
const API = {
    addRoom : '/room/add.do',
    deleteRoom:'/room/delete.do'
};
/**
 * 添加房源
 */
describe('deleteRoom house---------', function() {
    it(`${API['deleteRoom']} should work`, function(done) {
        (async ()=>{
            let houseData = await S_deleteRoom(M_addHouse).then((data)=>{
                console.log('delete room',data);
                return data;
            });
            console.log('houseData',houseData);
            done()
        })()
    });
});