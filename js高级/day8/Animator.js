
//参数一:周期序列  参数二：动画算子序列  参数三：回调函数序列
function Animator(duatrions,easings,pros){
	//动画周期序列
	this.durations = duatrions||[];
	//动画使用到的算子序列
	this.easings = easings||[];
	//动画执行期间需要执行的回调函数序列
	this.pros = pros||[];
}
//启动动画，参数：表示是否循环
Animator.prototype.start = function(loop){
	var startTime = new Date(),
		self = this,
		//记录正在执行的动画的序列的下标
		index = 0,
		duration,p,pro,easing;
		self.id = requestAnimationFrame(function step(){
			duration = self.durations[index];
			pro = self.pros[index];
			easing = self.easings[index];
			p = Math.min(1,(new Date() - startTime) / duration);	
			pro(easing(p));
			if(p==1){
				if(index == self.pros.length-1){
					if(loop){
						index = -1;
					}else{
						return;
					}
				}
				index++;
				startTime = new Date();
			}
		self.id = requestAnimationFrame(step);
	});

}
Animator.prototype.stop = function(){
	cancelAnimationFrame(this.id);
}