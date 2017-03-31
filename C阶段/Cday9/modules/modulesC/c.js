//如果要依赖的模块没有在config 中配置的话，我们可以写死路径进行依赖
define(['a','b'] , function(A,B){
	
	return {
		//两数之和的结果 + 刚才b模块的结果
		fn:function(x,y){
			$('.box').css({
				background:'orange',
			});
			return A.sum(x,y)+B.sumAndMul(x,y);
		}
	}
})