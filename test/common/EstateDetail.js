/**
 * Created by huangxiaogang on 17/1/11.
 * 楼栋信息
 */

import Client from '../../app/request.js';

import { S_estateDetail } from '../../app/services/index.js';
const API = {
    estateDetail : '/common/estateDetail.action'
};
describe('estateDetail---', function() {
    it(`${API.estateDetail} should work`, function(done) {
        (async ()=>{
            let buildingList = await S_estateDetail({
                estateId:5379
            });
            console.log(buildingList);
            done();
        })()
    });
});