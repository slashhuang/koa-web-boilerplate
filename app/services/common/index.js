/**
 * Created by huangxiaogang on 17/1/9.
 * 服务导出
 */

import City_Town from './CityList.js';
import ImgUpload from './UploadImage.js';


module.exports = {
    ...City_Town,
    ...ImgUpload
};