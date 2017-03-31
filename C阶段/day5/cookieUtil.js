var Cookie = {
	/*
	 * cookieObj	:是批量增加、修改的cookie键值对对象
	 * expiresDate	:是过期时间(毫秒)
	 */
	
	//新增 修改
	setCookie : function(cookieObj,expiresDate){
		var date = new Date();
		date.setTime(date.getTime() + expiresDate);
		for(var tempProp in cookieObj){
			document.cookie = tempProp + "=" + escape(cookieObj[tempProp])
			+ ";expires=" +date.toGMTString();
		}
		
	},
	
	//查询cookie的某个键值
	getCookie : function(key){
		var str = document.cookie;
		var cookiearr = str.split("; ");
		
		for(var tempCookie of cookiearr){
			var tempkey = tempCookie.split("=")[0];
			var tempvalue = tempCookie.split("=")[1];
			if(key == tempkey){
				return unescape(tempvalue);
			}
		}
	},
	
	
	//删除cookie中的某组
	delCookie : function(key){
		this.setCookie({
			[key] : "",
		},-10);
	}
	
}
