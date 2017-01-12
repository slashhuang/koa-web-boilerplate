/**
 * Created by huangxiaogang on 17/1/11.
 * 上传图片测试
 */

import Client from '../../app/request.js';
import request from 'request';
import { S_buildingList } from '../../app/services/index.js';
const rentSOA = 'http://rentsoa.iwjwtest.com';
const API = {
    uploadImage : '/common/uploadImage.do'
};
describe('uploadImage---', function() {
    it(`${API.uploadImage} should work`, function(done) {
        (async ()=>{
            const formData = {
                    my_file: fs.createReadStream(path.resolve(process.cwd(), 'assets/football.jpg'))
                };
                // Pass multiple values /w an Array
            request.post({
                url:`${rentSOA}${API['uploadImage']}`,
                formData: formData
            }, (err, httpResponse, body)=> {
                if (err) {
                    return console.error('upload failed:', err);
                }
                console.log('Upload successful!  Server responded with:', body);
            });
            done();
        })()
    });
});