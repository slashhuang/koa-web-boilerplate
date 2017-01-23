/**
 * Created by huangxiaogang on 17/1/23.
 * 客户信息接口数据模拟
 */

const M_contractDetail = {
    id:1, // 主键
    rebateTicket:1111, // 返利券号
    rebateMoney:20,//返利金额
    rentPrice:2000,// // 月租金,
    user : { // 用户信息
        id:20,//// 主键
        name:'slashhuang', // 姓名
        mobile:15005162976, // 手机号
        idNumber:320281199807072510 // 身份证号码
        },
    createTime:1234567, // 创建时间
    apartment:{ // 公寓主键
        id : 1111,// 主键
        name:'西西公主公馆', // 名称
        logo:'地址不详' // logo图片地址
    },
    status :0, // 状态(0:待审核,1:审核失败,2:审核成功)
    contractImages:[ // 合同照片
        {
            id :11, // 主键
            url: 'fuck you '//图片地址
        }
    ],
    contractTrail:[
        {
            id: 20,// 跟进记录主键
            contractId :22,// 合同主键
            type : 2,//操作类型(1:提交,2:审核失败,3:审核成功)
            operatorId : 1,//操作者主键
            operatorType : 2,//操作者类型(1:租客,2:房东,3:爱屋管理员)
            status : 0,//状态(0:待审核,1:审核失败,2:审核成功)
            memo : '照片拍的不清晰',// 审核失败原因
            createTime :1234567 // 创建时间
        }
    ]
};
const M_contractList = [
    M_contractDetail
];

module.exports ={
    M_contractDetail,
    M_contractList
};
