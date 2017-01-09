/**
 * Created by huangxiaogang on 17/1/9.
 * 数据结构说明
 */
/**
 * 数据结构
 * 房源的详细信息
 */
class HouseDetail {
    constructor(){
        let dataShape={
            id:'',房源id,
            buildingId:'',//楼盘id,
            buildingName:'',//楼盘名称,
            roomNo:'',//房源室号，比如501
            cityId:'',//城市Id,
            cityName:'',//城市名称,
            townId:'',//板块Id,
            townName:'',//板块名称,
            estateId:'',//小区id,
            estateName:'',//小区名称,
            subEstateId:'',//子划分Id,
            floor:'',//当前楼层,
            layers:'',总楼层,
            spaceArea:'',//面积,
            status:'',//房源状态（1：未出租；2：已出租；3：删除）,
            balconySum:'',//阳台数,
            bedroomSum:'',//卧室数目,
            livingRoomSum:'',//厅数,
            wcSum:'',//卫生间数,
            decorateType:'',//装修类型（1:''//,毛坯；2:''//,普装；3:''//,精装；4:''//,豪装）,
            facilities:'',// 房源配套，采用二进制方式存储
            picNum:'',//图片数,
            orientation:'',//朝向（1:''//,东,2:''//,西,3:''//,南,4:''//,北）,
            createTime:'',//创建时间,
            updateTime:'',//更新时间,
            rentType:'',//出租方式：0：整租；1：合租,
            rentPrice:'',//租金,
            description:'',//房源描述，
            imageList:[
                {
                    id:'',//主键,
                    referType:'',//,类型(0:''//,房源图片,1:房间图片),
                    referId:'',//房源Id或者房间Id
                    description:'',//描述
                    imgUrl:'',//图片地址
                    orderId:'',//排序
                    coverImage:'',//封面图标志(0:不是封面图,1:是封面图)
                    source:'',//来源(0:未实勘,1:app实勘,2:pc实勘)
                    scaleType:'', //图片比例(0-5:3,1-4:3)
                    createTime:'', // 创建时间
                    updateTime:'', // 修改时间
                }
            ],
            roomList:[
                {
                    id:'',主键,
                    roomNo:'',房间编号,
                    type:'',//类型(1:主卧,2:次卧)
                    description:'',//房间描述
                    spaceArea:'',// 面积
                    orientation:'',//  朝向(1:东,2:西,3:南,4:北)
                    rentPrice:'',// 租赁价格
                    facilities:'',// 配套(01:带独立卫生间,10:带阳台)
                    houseId:'',// 房源id
                    houseImages:[
                        {
                            id:'',//主键,
                            referType:"",//类型(0:房源图片,1:房间图片),
                            referId:"",//房源Id或者房间Id
                            description:"",//描述
                            imgUrl:"",//图片地址
                            orderId:"",//排序
                            coverImage:"",//封面图标志(0:不是封面图,1:是封面图)
                            source:"",//来源(0:未实勘,1:app实勘,2:pc实勘)
                            scaleType:'', //图片比例(0-5:3,1-4:3)
                            createTime:'', // 创建时间
                            updateTime:'' // 修改时间
                        }
                    ],
                    status:'', // 房间状态(0:未审核,1:审核失败,2:待出租,3:已出租,4:下架)
            }],
            houseManagerId:'',二房东id,
            houseManagerName:'',//二房东姓名,
            houseManagerMobile:'',//二房东手机
        }
    }
}

