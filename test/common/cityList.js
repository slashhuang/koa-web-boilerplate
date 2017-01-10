/**
 * Created by huangxiaogang on 17/1/9.
 */
import Client from '../../app/request.js';

import {
    S_cityList,
    S_townList,
    S_estateList} from '../../app/services/index.js';

describe('cityList', function() {
    it('/common/cityList.action with args 2 should work', function(done) {
        (async ()=>{
            let cityList =   await S_cityList({
                provinceId:2
            });
            console.log(cityList);
            done()
        })()
    });
});
describe('cityList', function() {
    it('/common/cityList.action without args should work', function(done) {
        (async ()=>{
            let cityList =   await S_cityList({
                provinceId:''
            });
            console.log(cityList);
            done()
        })()
    });
});
describe('townList', function() {
    it('/common/townList.action with args cityId should work', function(done) {
        (async ()=>{
            let townList =   await S_townList({
                cityId:1
            });
            console.log(townList);
            done()
        })()
    });
});
describe('townList', function() {
    it('/common/townList.action without cityId should work', function(done) {
        (async ()=>{
            let townList =   await S_townList({
                cityId:''
            });
            if(townList){
                console.log(townList['data']);
                done()
            }
        })()
    });
});
describe('estateList', function() {
    it('/common/estateList.action should work', function(done) {
        (async ()=>{
            let estateList = await S_estateList({
                keyword:'虹桥'
            });
            console.log(estateList);
            done()
        })()
    });
});
