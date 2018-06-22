import render from './render.js'
import event from './event.js'
const login = (opt={})=>{
	let obj = {
		loginBtnText:"登陆",
		loginUser:"请输入用户名",
		loginPwd:"请输入密码"
	}
	Object.assign(opt,obj);
	render(opt);
	event()
}
export default login;