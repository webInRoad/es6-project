import FetchMock from 'fetch-mock'
FetchMock.mock('/login',(url,params)=>{
	let p = params.params
	if(p.user=="admin"){
		if(p.pwd=='admin'){
			return {code:200,msg:"登陆成功"}
		}else{
			return {code:401,msg:"密码不对"}
		}
	}else{
		return {code:402,msg:"用户名不对"}
	}

})
