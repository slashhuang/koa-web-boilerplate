/**
 * Created by huangxiaogang on 17/1/10.
 * 数据模拟
 */

const M_cityList = [{
    cityName:'上海',
    cityId:'1122'
}];
const M_townList=[{
    townName:'虹口足球场',
    townId:'112'
}];
const M_estateList = [{
        estateId: 1227,
        estateName: '虹桥永兆豪庭'
    },
    {
        estateId: 5,
        estateName: '去你妈的'
    },
    {
        estateId: 4,
        estateName: '二货'
    },
    {
        estateId: 33,
        estateName: '拉了'
    }];
//根据楼栋查询室号
const M_roomList=[{
    1:["0101","0102","0103","0109","0113"]
}];
//根据子划分Id查询楼栋信息
const M_buildingList={
    "data":[
        {"buildingId":1,"buildingName":"2","buildingNameStr":"2号"},
        {"buildingId":188994,"buildingName":"5","buildingNameStr":"5号"}
    ],
    "msg":"Ok",
    "status":1
};
//根据小区Id获取小区子划分列表
const M_subEstateList= [{"address":"中山南路1711号","id":83728}];
module.exports=    {
    M_cityList,
    M_townList,
    M_estateList,
    M_roomList,
    M_buildingList,
    M_subEstateList
};

