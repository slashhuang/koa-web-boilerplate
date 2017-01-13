/**
 * Created by slashhuang on 17/1/13.
 * 工具相关
 */

import {U_transStringToBinary} from '../../app/services/index.js';
/**
 * 添加房源
 */
describe('transStringToBinary----------', function() {
    it(`transStringToBinary should work`, function(done) {
        /**
         * 15 => '1111' => [1,2,4,8]
         */
        let transData = U_transStringToBinary(15);
        console.log('15 transformed to ');
        console.log(transData);
        done()
    });
});