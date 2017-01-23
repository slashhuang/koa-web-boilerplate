9.获取配置列表
(1).接口功能
获取返利券的配置信息列表

(2).请求方法
GET /rebateTicket/list.do

(3).输入参数
无

(4).返回结果
{
	status:1 // -1:失败,1:成功
	msg:"" // 消息
	data: {// 返回数据
		[
			{
				id:// 配置项主键
				configKey: // 配置内容(1:返利券购买金额,2:返利券上限,3:返利券百分比)
				configValue : // 配置内容的取值
				user : { // 操作者
					id : // 主键
					name : 姓名
				}，
				updateTime: // 修改时间
			}
		]
	}
}


10.修改配置
(1).接口功能
修改配置内容的值

(2).请求方法
POST /rebateTicket/update.do

(3).输入参数
{
	id: // 配置项主键
	configValue : // 配置内容的值
}

(4).返回结果
{
	status:1 // -1:失败,1:成功
	msg:"" // 消息
	data: {}// 返回数据
}