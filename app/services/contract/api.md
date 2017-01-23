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
