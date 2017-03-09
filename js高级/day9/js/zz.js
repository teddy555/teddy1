window.onload = function(){
	var wrap = document.getElementById("wrap");
	var slide = document.getElementById("slide");
	var arrow = document.getElementById("arrow");
	var lis = slide.getElementsByTagName("li");
	wrap.onmouseenter = function(){
		clearInterval(timerid);
		new Animator(500,Easing.linear,function(easing){
			arrow.style.opacity = easing;
		}).start(false);
	}
	wrap.onmouseleave = function(){
		new Animator(500,Easing.linear,function(easing){
			arrow.style.opacity = 1-easing;
		}).start(false);
		autoplay();
	}
	//存储每张照片位置信息的数组
	var imgsInfo = [
		{
			left:50,
			top:0,
			width:400,
			height:300,
			opacity:0.2,
			zIndex:1
		},
		{
			left:0,
			top:50,
			width:600,
			height:400,
			opacity:0.6,
			zIndex:2
		},
		{
			left:200,
			top:80,
			width:800,
			height:500,
			opacity:1,
			zIndex:3
		},
		{
			left:600,
			top:50,
			width:600,
			height:400,
			opacity:0.6,
			zIndex:2
		},
		{
			left:750,
			top:0,
			width:400,
			height:300,
			opacity:0.2,
			zIndex:1
		}
	]
	
	function change(){
		for(let i = 0;i<lis.length;i++){
			new Animator(1000,Easing.linear,function(easing){
				var style = lis[i].style;
				var info = imgsInfo[i];
				style.width = lis[i].offsetWidth+(info.width-lis[i].offsetWidth)*easing+"px";
				style.height = lis[i].offsetHeight+(info.height-lis[i].offsetHeight)*easing+"px";
				style.left = lis[i].offsetLeft+(info.left-lis[i].offsetLeft)*easing+"px";
				style.top = lis[i].offsetTop+(info.top-lis[i].offsetTop)*easing+"px";
				style.opacity = info.opacity;
				style.zIndex = info.zIndex;
				if(easing == 1){
                    isStop = true;
                }else{
                    isStop = false;
                }
			}).start(false);
		}
	}
	change();
	arrow.onclick = function(e){
		if(!isStop) return;
		var className1 = e.target.parentNode.className;
		switch(className1){
			case "prev":
			imgsInfo.push(imgsInfo.shift());
			break;
			case "next":
			imgsInfo.unshift(imgsInfo.pop());
			break;
			default:
			break;
		}
		change();
	}
	var timeid;
	function autoplay(){
		timerid = setInterval(function(){
			imgsInfo.unshift(imgsInfo.pop());
			change();
		},2000);
	}
}
