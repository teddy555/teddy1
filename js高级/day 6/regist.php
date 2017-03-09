<?php
	//通过get请求提交的参数
	$user = $_GET["user"];
	$pwd = $_GET["pwd"];
	if($user=="孙影"){
		echo $user."你走";
	}else{		
	echo "欢迎".$user."注册,请记住你的密码：".$pwd;
	}

?>