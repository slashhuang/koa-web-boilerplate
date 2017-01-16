/**
 * Created by huangxiaogang on 17/1/12.
 */
//const exec = require('child_process').exec;
//const path = require('path')
//const  Command_Set_Path=path.resolve(process.cwd(),'./node_modules/.bin/');
//
//exec(`PATH=${Command_Set_Path}`,(err,stdout,stderr)=>{
//    exec(`echo $PATH`,(err,stdout,stderr)=>{
//        console.log(Command_Set_Path);
//        console.log(stdout)
//    });
//});
/**
 *   缓存下自己的命令
 "base":"node ./command.js ",
 "dev":"node ./command.js ",
 "test":"node ./command.js ",
 "prod":"node ./command.js ",
 "mock-mocha":"node ./command.js ",
 "api-mocha":"node ./command.js ",
 "proxy": "node ./command.js ",
 "deploy":"node ./command.js ",
 "test-c":"node ./command.js ",
 "dev-c":"node ./command.js ",
 *
 */
/**
 - * Created by slashhuang on 17/1/13.
 - * 命令管理工具
 - * /Users/huangxiaogang/.nvm/versions/node/v5.11.1/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Users/huangxiaogang/maven/bin:/Users/huangxiaogang/Library/Android/sdk/tools:/Users/huangxiaogang/Library/Android/sdk/platform-tools
 - */
'use strict'
const exec = require('child_process').exec;
const path = require('path');
const C_mock = 'NODE_mock=mock',
          C_dev="NODE_DEV=dev",
          DevVars=`NODE_ENV=dev ${C_dev}  ${C_mock}`,
          TestVars = `NODE_ENV=test ${C_dev}`,
          ProdVars="NODE_ENV=prod ",
          Base = "nodemon --use_strict ./server.js",
          Mocha = "nodemon --use_strict mocha -t 4000 ./test/test.js";
const command = JSON.parse(process.env['npm_config_argv']).original.pop();
const map =  {
        "dev": `${DevVars}  ${Base}`,
        "test": `${TestVars} ${Base} `,
        "prod": `${ProdVars} ${Base} `,
        "mockmocha": `${C_mock} ${Mocha}`,
        "apimocha":`NODE_ENV=test ${Mocha}`,
        "proxy": `${Base} --proxyPort=8004`,
        "deploy":"open http://192.168.1.121:8080/job/iwjw-rent-platform/",
        "test-c":`${TestVars}  ${Base}  -- --project=console`,
        "dev-c":`${DevVars}  ${Base}  -- --project=console`,
        "dev-t":`${DevVars}  ${Base}  -- --project=console`,
};
var tmp_PATH_Array = [],
       raw_PATH='',
    Command_Set_Path=path.resolve(process.cwd(),'./node_modules/.bin/');

new Promise((resolve)=>{
    exec("echo $PATH",(err,stdout)=>{
            raw_PATH = stdout;
            tmp_PATH_Array = stdout.split(':');
            tmp_PATH_Array.push(Command_Set_Path);
            resolve(tmp_PATH_Array)
        });
    }).then(()=>{
        let pathString = tmp_PATH_Array.join(':').replace(/\n/g,'');
        return new Promise((res)=>{
            exec(`PATH=${pathString}`,(err)=>{
                if(!err){
                    console.log(`path revised successfully to \n`);
                    console.log(pathString)
                }
                res(pathString)
            });
        });
    })
   .then(()=>{
        console.log(map[command]);
        exec("echo $PATH",(err,stdout)=>{
            console.log(stdout);
            exec('nodemon',(err)=>{
                if(err){
                    console.log(err);
                }
                process.exit(1);
                console.log('command successful');
            });
        });

   });
//退出方案的cleanup
process.stdin.resume();//so the program will not close instantly
function exitHandler() {
   exec(`PATH=${raw_PATH}`,(err)=>{
        if(!err){ console.log(`path revised successfully`)}
        console.log('you can safely exit now ^_^')
    });
}
//do something when app is closing
process.on('exit', exitHandler);
//catches ctrl+c event
process.on('SIGINT', exitHandler);
//catches uncaught exceptions
process.on('uncaughtException', exitHandler);
