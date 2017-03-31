//定义模块的时候，可以依赖于其他模块
//例如['a'] 就是依赖于 a 模块
define(['a'],function(A){
	
	//局部函数
	function mul(x,y){
		return x-y;
	}
	
	return {
		//两数之和 再加上 两数之差
		sumAndMul:function(x,y){
			$('.box').css({
				//jquery 加载完后,就是全局,不需要额外再导入,直接使用
				background:'blue',
			});
			return A.sum(x,y)+mul(x,y);
		},
		
		
	}
})