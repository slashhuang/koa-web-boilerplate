/**
 * Created by huangxiaogang on 17/1/23.
 * 客户信息接口数据模拟
 */

const M_rebateDetail = {
    id:11,// 配置项主键
    configKey:1, // 配置内容(1:返利券购买金额,2:返利券上限,3:返利券百分比)
    configValue : 20,// 配置内容的取值
    user : { // 操作者
        id : 11,// 主键
        name :'slashhuang'// 姓名
    },
    updateTime:123456 // 修改时间
};
const M_rebateList = [
    M_rebateDetail
];

module.exports ={
    M_rebateDetail,
    M_rebateList
};
