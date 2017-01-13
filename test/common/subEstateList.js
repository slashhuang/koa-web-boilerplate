/**
 * Created by huangxiaogang on 17/1/11.
 * 楼栋信息
 */

import Client from '../../app/request.js';

import { S_subEstateList } from '../../app/services/index.js';
const API = {
    subEstateList : '/common/estateDetail.action'
};
describe('subEstateList---', function() {
    it(`${API.subEstateList} should work`, function(done) {
        (async ()=>{
            let buildingList = await S_subEstateList({
                estateId:30
            });
            console.log(buildingList);
            done();
        })()
    });
});