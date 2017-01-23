1.获取验证码
(1).接口功能
生成手机验证码

(2).请求方法
POST /user/sendVerifyCode.do

(3).输入参数
{
	mobile : "xxxxx" // 手机号
	platform: 1 // 登录平台(1:租赁平台, 2:爱屋吉屋后台)
}

(4).返回结果
{
	status:1 // -1:失败,1:成功
	msg:"" // 消息
	data: ""// 返回数据
}


2.验证验证码:
(1).接口功能
验证验证码

(2).请求方法
POST /user/checkVerifyCode.do

(3).输入参数
{
	mobile:"xxxxx",
	verifyCode:"Mi2x0a"
}

(4).返回结果
{
	status:1 // -1:失败,1:成功
	msg:"" // 消息
	data: {}// 返回数据
}
如果验证通过，响应的cookie中添加用户信息

3.退出
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
