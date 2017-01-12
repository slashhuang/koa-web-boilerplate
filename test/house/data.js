/**
 * Created by huangxiaogang on 17/1/10.
 * ---- wiki:
 * 添加房源
 * http://wiki.superjia.com/confluence/pages/viewpage.action?pageId=11160731
 */
const M_addHouse = {
    buildingId:1,
    buildingName:'新房子',
    roomNo:'1',
    estateId:1212,
    rentPrice:200,
    spaceArea:100,
    bedroomSum:2,
    livingRoomSum:1,
    wcSum:4,
    decorateType:1,//装修类型（1:毛坯；2:普装；3:精装；4:豪装）,
    orientation:1 ,//朝向（1:东,2:西,3:南,4:北）,
    facilities:1,//配套
    description:'这是个好房子',//房源描述
    fileUrls:['hello'],//图片文件url数组
    rentType:1,//1：整租；2：合租
    floor:5,//当前楼层
    layers:10,//总楼层数
    roomInfo:[{
        spaceArea: 100,//面积
        orientation: 1,//
        rentPrice: 200,
        facilities:1,//配套设施
        houseRoomNo:'1',//房源的房间编号
        type:1,//房间类型，1：主卧；2：次卧
        fileUrls:[]//图片文件url数组
    }]
};
const M_listParam={
    //cityId:'2',//区域Id。所有区域，传空或者不传
    //townId:'2',//板块Id。某个区域下面的所有板块，传空或者不传
    estateId:'1212',//小区Id。小区不限，传空或者不传
    //rentType:0,//出租方式，0：整租；1：合租。出租方式不限，传空或者不传
    //houseStatus:1,//房源状态，1：为出租；2：已出租。房源状态不限，传空或者不限
    //startTime:'',//起始创建时间。起始时间不限，传空或者不传
    //endTime:'',//终止创建时间。终止时间不限，传空或者不传
    //houseManagerMobile:''//二房东的手机号。二房东手机号不限，传空或者不传
};
const M_detailParam={
    id:0,
    idType:1
};
module.exports ={
    M_addHouse,
    M_listParam,
    M_detailParam
};