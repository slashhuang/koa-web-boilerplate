/**
 * Created by huangxiaogang on 17/1/23.
 * 客户信息接口数据模拟
 */

const M_customerDetail = {
    user : {
        id : 1,// 客户主键
        name :'slashhuang', // 姓名
        mobile : 15005162976// 手机号
    },
    house : {
        id :1000, // 房源编号
        iwHouseId :2017111, // 爱屋房源编号
        area : '普陀',// 区域
        plate : '虹口足球场',// 板块
        address :'航中路99号', // 小区地址
        buildingNumber :'11', // 楼号
        roomNo : '22'//室号
    },
    contactType :1, //联系方式(1:在线预约,2:电话联系)
    appointDate :115425235, // 预约日期
    createTime : 42352354,// 创建时间
    rebateTicketTime : 4254235423,// 返利券购买时间
};
const M_customerList = [
    M_customerDetail
];

module.exports ={
    M_customerDetail,
    M_customerList
};
