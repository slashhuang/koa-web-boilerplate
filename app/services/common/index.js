/**
 * Created by huangxiaogang on 17/1/9.
 * 服务导出
 */

import City_Town from './cityList.js';
import ImgUpload from './uploadImage.js';


module.exports = {
    ...City_Town,
    ...ImgUpload
};