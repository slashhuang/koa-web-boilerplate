/**
 * Created by huangxiaogang on 17/1/9.
 * 数据结构
 * 房源的详细信息
 */
const mockData={
    id:'111',//房源Id
    buildingName:'花园新村',//楼栋名称
    cityId:'1122',//区域Id
    cityName:'虹桥',//和名称
    townId:11222,
    townName:'虹口足球场',// 板块Id和名称
    estateId:'1245',//小区id
    estateName:'七仙美地苑',//小区名称
    floor:13,//楼层
    layers:1243214,//总楼层
    spaceArea:1123,//面积
    status:1,//1：未出租；2：已出租；3：删除
    bedroomSum:5,// 卧室数
    livingRoomSum:1,//厅数
    wcSum:2,//卫生间数
    facilities: [],//房屋配套
    decorateType:1,//1:毛坯；2:普装；3:精装；4:豪装
    picNum:1,//图片数目
    orientation:1,//1:东,2:西,3:南,4:北
    createTime:'2017.1.1',//创建时间
    updateTime:'',//更新时间
    rentType:0,//0：整租；1：合租
    rentPrice:20,//租金
    imageList:[],//房源图片
    houseManagerId:11,//二房东ID
    houseManagerName:'slashhuang',//二房东名字
    houseManagerMobile:'15005162976'//手机号
};
module.exports=    {
    M_houseDetail : mockData,
    M_houseList: [mockData]
};

