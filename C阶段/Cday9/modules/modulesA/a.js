//使用define方法来定义模块
//把要写的功能，写在这个匿名函数中
define(function(){
	//相加
	function sum(a,b){
		return a+b;
	}
	return {
		sum :　sum,
		//也可以把某个功能放在这里
		changeDivBgColor : function(){
			$('.box').css({
				//jquery 加载完后,就是全局,不需要额外再导入,直接使用
				background:'pink',
			})
		},
	}
})