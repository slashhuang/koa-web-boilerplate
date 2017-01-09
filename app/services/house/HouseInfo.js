/**
 * Created by huangxiaogang on 17/1/6
 * 查询房源明细
 * 查询房源列表
 */
import Client from '../../request.js';

class CommonApi extends Client{
    constructor(){
        super();
        this.actions = {
            houseDetail : '/house/detail.do',
            houseList : ' /house/list.action'
        }
    }
}
let apiInstance = new CommonApi();
//根据城市Id获取该城市所属的区域列表
/**
 * 入参数
 * id：房源或者房间Id
 * idType：id的类别  1：房源；2：房间
 *
 * @param params
 */
let S_houseDetail = async function(params){
    return apiInstance.fetch({
        url:'houseDetail',
        method:'get',
        params
    }).then((data)=> {
        if(process.env['NODE_mock']=='mock'){
            let mock = {
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
            return mock;
        }
        return data;
    })
};
/**
 * 入参数
 *   cityId：区域Id。所有区域，传空或者不传
 townId：板块Id。某个区域下面的所有板块，传空或者不传
 estateId：小区Id。小区不限，传空或者不传
 rentType：出租方式，0：整租；1：合租。出租方式不限，传空或者不传
 houseStatus：房源状态，1：为出租；2：已出租。房源状态不限，传空或者不限
 startTime：起始创建时间。起始时间不限，传空或者不传
 endTime：终止创建时间。终止时间不限，传空或者不传
 *
 * @param params
 */
let S_houseList = async function(params){
    return apiInstance.fetch({
        url:'houseList',
        method:'get',
        params
    }).then((data)=> {
        if(process.env['NODE_mock']=='mock'){
            let mock = [{
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
            }];
            return mock;
        }
        return data;
    })
};
module.exports = {
    S_houseDetail,
    S_houseList
};

