/**
 * Created by huangxiaogang on 17/1/9.
 * 房源相关的service集合
 */

import House_Action from './HouseAction.js';
import House_Info from './HouseInfo.js';


module.exports = {
    ...House_Action,
    ...House_Info
};