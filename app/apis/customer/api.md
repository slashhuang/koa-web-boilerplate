1.获取验证码

(1).接口功能
生成手机验证码

(2).请求方法
POST /user/sendVerifyCode.do

(3).输入参数
{
	mobile : "xxxxx" // 手机号
}

(4).返回结果
{
	status:1 // -1:失败,1:成功
	msg:"" // 消息
	data: "s5fy8s"// 返回数据
}


2.获取密码
(1).接口功能
根据手机号+收到的验证码获取后台登录密码

(2).请求方法
POST /user/getPassword.do

(3).输入参数
{
	mobile:"xxxx",
	verfifyCode:"s5fy8s"
}

(4).返回结果
{
	status:1 // -1:失败,1:成功
	msg:"" // 消息
	data: "Mi2x0a"// 返回数据
}


3.验证密码:
(1).接口功能
验证登录密码

(2).请求方法
POST /user/checkPassword.do

(3).输入参数
{
	mobile:"xxxxx",
	password:"Mi2x0a"
}

(4).返回结果
{
	status:1 // -1:失败,1:成功
	msg:"" // 消息
	data: {}// 返回数据
}
如果验证通过，响应的cookie中添加用户信息

4.退出
(1).接口功能
退出系统
(2).请求方法
GET /user/logout.do
(3).输入参数
无
(4).返回结果
{
	status:1 // -1:失败,1:成功
	msg:"" // 消息
	data: {}// 返回数据
}


5.获取客户信息
(1).接口功能
获取客户列表

(2).请求方法
GET /customer/getAll.do

(3).输入参数
无

(4).返回结果
{
	status:1 // -1:失败,1:成功
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
					areaName : // 区域
					plateName : // 板块
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
	status:1 // -1:失败,1:成功
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

7.获取合同列表
(1).接口功能
获取合同列表

(2).请求方法
GET /contract/list.do

(3).输入参数
无

(4).返回结果
{
	status:1 // -1:失败,1:成功
	msg:"" // 消息
	data: {
		[
			id: // 主键
			rebateTicket: // 返利券号
			rebateMoney:返利金额
			rentPrice: // 月租金,
			user : { // 用户信息
				id:// 主键
				name: // 姓名
				mobile: // 手机号
				idNumber: // 身份证号码
			},
			createTime: // 创建时间
			apartment:{ // 公寓主键
				id : // 主键
				name: // 名称
				logo: // logo图片地址
			},
			status : // 状态(0:待审核,1:审核失败,2:审核成功),
			contractImages:[] // 合同照片
		]
	}// 返回数据
}


8.获取合同详情
(1).接口功能
获取合同详情
(2).请求方法
GET /contract/detail.do
(3).输入参数
{
	id:合同主键
}
(4).返回结果
{
	status:1 // -1:失败,1:成功
	msg:"" // 消息
	data: {
		id: // 主键
		rebateTicket: // 返利券号
		rebateMoney:返利金额
		rentPrice: // 月租金,
		user : { // 用户信息
			id:// 主键
			name: // 姓名
			mobile: // 手机号
			idNumber: // 身份证号码
		},
		createTime: // 创建时间
		apartment:{ // 公寓主键
			id : // 主键
			name: // 名称
			logo: // logo图片地址
		},
		status : // 状态(0:待审核,1:审核失败,2:审核成功)
		contractImages:[ // 合同照片
			{
				id : // 主键
				url: //图片地址
			}
		],
		contractTrail:[
			{
				id: // 跟进记录主键
				contractId : 合同主键
				type : //操作类型(1:提交,2:审核失败,3:审核成功)
				operatorId : 操作者主键
				operatorType : 操作者类型(1:租客,2:房东,3:爱屋管理员)
				status : 状态(0:待审核,1:审核失败,2:审核成功)
				memo : // 审核失败原因
				createTime : // 创建时间
			}
		]
	}// 返回数据
}

9.审核结果提交
(1).接口功能
审核合同结果的提交

(2).请求方法
POSt /contract/audit.do

(3).输入参数
{
	id: // 合同主键
	status : //审核结果(1:审核失败,2:审核成功)
	memo : "" //审核失败的原因
}
(4).返回结果
{
	status:1 // -1:失败,1:成功
	msg:"" // 消息
	data: {}// 返回数据
}

10.获取配置列表
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


11.修改配置
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