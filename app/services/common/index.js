/**
 * Created by huangxiaogang on 17/1/9.
 * 服务导出
 */

import City_Town from './CityList.js';
import Building_Room from './RoomList.js';
import ImgUpload from './UploadImage.js';
import BuildingList from './BuildingList.js';
import SubEstateList from './SubEstateList.js';
module.exports = {
    ...City_Town,
    ...ImgUpload,
    ...Building_Room,
    ...BuildingList,
    ...SubEstateList
};