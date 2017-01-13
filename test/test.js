/**
 * built by slashhuang
 * 17.1.10
 */



require("babel-register");
require('./index.js');



const mock = process.env['NODE_mock'];
if(mock){
    console.log(`--目前是在----${mock}--环境下测试API接口`)
}else{
    console.log(`--目前是在----正式环境下测试API接口`)
}
