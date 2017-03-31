//这里可以写配置相关的代码，比如：利用require.config方法配置模块的路径
require.config({
	//paths 是配置模块的路径
	paths:{
		//../lib/jquery 表示通过该路径下的jquery.js
		//属性jquery是随便取得名字
		//jquery:'../lib/jquery',
		//路径值还可以是个数组,还可以导入网络的模块(js库)
		jquery:['../lib/jquery'],
		a:'../modules/modulesA/a',
		b:'../modules/modulesB/b',
		
	}
});

//使用require 方法进行导入使用
/*
 * 第一个参数表示所要加载的模块名字
 * 第二个参数表示加载模块后的回调函数
 * 回调函数的参数是： 加载模块所导出该模块对应的值(对象、方法、普通变量)
 * 我们一般把没有模块导出的模块，放在后面，例如a 放在 jquery 后面，
 * 因为回调函数中的参数就是前面模块导出的值，要一一对应
 */
//'../modules/modulesC/c' 这样配置模块，会把当前依赖的路径定位到当前目录下
require(['jquery','a','b','../modules/modulesC/c'],function(jq,a,b,c){
	console.log($);
	console.log('a');
	console.log(a.sum(1,1));
	a.changeDivBgColor();
	console.log(b.sumAndMul(2,5));
	console.log(c.fn(1,2));
});
