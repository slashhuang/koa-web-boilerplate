/**
 * Created by huangxiaogang on 17/1/9.
 * 动态拉取静态资源测试
 */

import { StaticTest } from '../../utils/index.js';
/**
 * 添加房源
 */
describe('static resource test---------', function() {
    it(`static resource test should work`, function(done) {
        (async ()=>{
            StaticTest.startLoadProperties();
            done()
        })()
    });
});