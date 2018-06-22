let render = (opt={})=>{
	let tml = `
		<form action="" onsubmit="return false">
			<div style='opacity:0'>
				<label for="">
					<input type="text" placeholder='请输入用户名'>
				</label>	

				<label for="">
					<input type="password" placeholder='请输入密码'>
				</label>
			</div>	
			<label for="">
				<input type="text" name="user" id="user" placeholder=${opt.loginUser}>
			</label>
			<label for="">
				<input type="text" name="pwd" id="pwd" placeholder='${opt.loginPwd}'>
			</label>
			<label for="">
				<input type="button" value=${opt.loginBtnText} id="btn">
			</label>
		</form>
	`
	opt.container.innerHTML = tml;
}
export default render