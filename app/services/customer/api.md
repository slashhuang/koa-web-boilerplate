5.获取客户信息
(1).接口功能
获取客户列表

(2).请求方法
GET /customer/getAll

(3).输入参数
无

(4).返回结果
{
        status:1 // -1:失败,2:成功
        msg:"" // 消息
        data: { // 返回数据
                [
                        {
                                user : {
                                        id : // 客户主键
                                        name : // 姓名
                                        mobile : // 手机号
                                }
                                house : {
                                        id : // 房源编号
                                        iwHouseId : // 爱屋房源编号
                                        area : // 区域
                                        plate : // 板块
                                        address : // 小区地址
                                        buildingNumber : // 楼号
                                        roomNo : 室号
                                },
                                contactType : //联系方式(1:在线预约,2:电话联系)
                                appointDate : // 预约日期
                                createTime : // 创建时间
                                rebateTicketTime : // 返利券购买时间
                        }
                ]
        }
}

6.获取客户信息详情页
(1).接口功能
获取客户详细信息

(2).请求方法
POST /customer/detail.do

(3).输入参数
{
        userId : // 客户主键
}

(4).返回结果
{
        status:1 // -1:失败,2:成功
        msg:"" // 消息
        data: {// 返回数据
                user : {
                        id :
                        name:
                        mobile:
                }
                [
                        {
                                operateType: //操作类型(1:注册,2:购买返利券,3:联系房东,4:预约看房,5:返利券退款,6:录入合同,7:合同审核失败,8:生成现金券,9:使用现金券)
                                memo: // 备注
                                createTime:创建时间
                        }
                ]
        }
}
