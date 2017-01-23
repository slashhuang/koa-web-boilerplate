/**
 * Created by huangxiaogang on 17/1/10.
 * 服务列表
 */
import CommonAPI from './common/index.js';
import HouseAPI from './house/index.js';
import RoomAPI from './room/index.js';
import LoginAPI from './user/index.js'
import CustomerAPI from './customer/index.js'
module.exports={
    ...CommonAPI,
    ...RoomAPI,
    ...HouseAPI,
    ...LoginAPI,
    ...CustomerAPI
};