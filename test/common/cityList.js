/**
 * Created by huangxiaogang on 17/1/9.
 */
import Client from '../../app/request.js';

import {
    S_cityList,
    S_townList,
    S_estateList} from '../../app/services/index.js';

describe('cityList', function() {
    it('should work', function(done) {
        (async ()=>{
            let cityList =   await S_cityList({
                provinceId:2
            });
            console.log(cityList)
            done()
        })()
    });
});