/**
 * Created by huangxiaogang on 17/1/11.
 * 楼栋信息
 */

import Client from '../../app/request.js';

import { S_buildingRoomList } from '../../app/services/index.js';
const API = {
    roomList : '/common/roomList.action?buildingId=2852',
};
describe('roomList', function() {
    it(`${API.roomList} should work`, function(done) {
        (async ()=>{
            let buildingRoomList = await S_buildingRoomList({
                buildingId:2852
            });
            console.log(buildingRoomList);
            done()
        })()
    });
});
