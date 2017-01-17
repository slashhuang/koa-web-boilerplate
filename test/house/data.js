/**
 * Created by huangxiaogang on 17/1/10.
 * ---- wiki:
 * 添加房源
 * http://wiki.superjia.com/confluence/pages/viewpage.action?pageId=11160731
 */
const M_addHouse = {
    id:5,
    buildingId:1,
    buildingName:'更新房源名字',
    roomNo:'1',
    estateId:1212,
    subEstateId:1,//子划分小区id
    rentPrice:5000,
    spaceArea:1000,
    bedroomSum:2,
    livingRoomSum:2,
    wcSum:2,
    decorateType:4,//装修类型（1:毛坯；2:普装；3:精装；4:豪装）,
    orientation:4 ,//朝向（1:东,2:西,3:南,4:北）,
    facilities:63,//配套
    description:'jjjj',//房源描述
    images:[
        {
            id:1,
            imgUrl:'',//图片地址
            type:1,// 图片类型(1:封面图,2:厅,3:主卧,4:次卧,5:卫生间,6:厨房,7:阳台,8:室外)
            description:'cao',//描述
            source:0,//图片来源(0:未实勘;1:app实勘; 2:pc实勘)
            scaleType:0//图片比例(0-4:3, 1-5:3)
        }
    ],
    rentType:1,//1：整租；2：合租
    floor:5,//当前楼层
    layers:10,//总楼层数
    roomInfo:[
    //    {
    //    spaceArea: 100,//面积
    //    orientation: 1,//
    //    rentPrice: 200,
    //    facilities:1,//配套设施
    //    houseRoomNo:'1',//房源的房间编号
    //    type:1,//房间类型，1：主卧；2：次卧
    //    images:[
    //        {
    //            id:'',
    //            imgUrl:'',//图片地址
    //            type:1,// 图片类型(1:封面图,2:厅,3:主卧,4:次卧,5:卫生间,6:厨房,7:阳台,8:室外)
    //            description:'cao',//描述
    //            source:0,//图片来源(0:未实勘;1:app实勘; 2:pc实勘)
    //            scaleType:0//图片比例(0-4:3, 1-5:3)
    //        }
    //    ]
    //}
    ]
};
const M_listParam={
    cityId:'3',//区域Id。所有区域，传空或者不传
    //townId:'2',//板块Id。某个区域下面的所有板块，传空或者不传
    //estateId:'1212',//小区Id。小区不限，传空或者不传
    rentType:1,//出租方式，0：整租；1：合租。出租方式不限，传空或者不传
    //houseStatus:1,//房源状态，1：为出租；2：已出租。房源状态不限，传空或者不限
    //startTime:'',//起始创建时间。起始时间不限，传空或者不传
    //endTime:'',//终止创建时间。终止时间不限，传空或者不传
    //houseManagerMobile:''//二房东的手机号。二房东手机号不限，传空或者不传
};
const M_detailParam={
    id:5,
    idType:1
};
const M_deleteParam={
    id:72
};
module.exports ={
    M_addHouse,
    M_listParam,
    M_detailParam,
    M_deleteParam
};