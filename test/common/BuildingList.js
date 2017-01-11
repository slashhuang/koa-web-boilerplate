/**
 * Created by huangxiaogang on 17/1/11.
 * 楼栋信息
 */

import Client from '../../app/request.js';

import { S_buildingList } from '../../app/services/index.js';
const API = {
    buildingList : '/common/buildingList.action?subEstateId=80011',
};
describe('buildingList---', function() {
    it(`${API.buildingList} should work`, function(done) {
        (async ()=>{
            let buildingList = await S_buildingList({
                subEstateId:80011
            });
            console.log(buildingList);
            done();
        })()
    });
});