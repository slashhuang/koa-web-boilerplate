/**
 * Created by huangxiaogang on 17/1/10.
 * ---- wiki:
 * 添加房源
 * http://wiki.superjia.com/confluence/pages/viewpage.action?pageId=11160731
 */
const M_addRoom = {
    images:[
        {
            id:1,//主键
            imgUrl:'',//图片地址
            type:1,//// 图片类型(1:封面图,2:厅,3:主卧,4:次卧,5:卫生间,6:厨房,7:阳台,8:室外)
            description:'',//房间
            source:0,////图片来源(0:未实勘;1:app实勘; 2:pc实勘)
            scaleType:1,//图片比例(0-4:3, 1-5:3)
        }
    ],
    type:1,//类型(1:主卧,2:次卧)
    spaceArea:25,//面积
    orientation:1,//朝向(1:东,2:西,3:南,4:北)
    rentPrice:25,//租赁价格
    facilities:10,////配套(01:带独立卫生间,10:带阳台)
    houseId:'10',//房源Id
    houseRoomNo:20,//房源房间编号
    description:'草拟吗'//房间描述
};
const M_deleteRoom = {
    id:1
};

module.exports ={
    M_addRoom,
    M_deleteRoom
};