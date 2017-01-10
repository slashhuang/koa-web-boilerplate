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
        fileUrls:['helo']//图片文件Url数组
    }]
};
module.exports ={
    M_addHouse
};