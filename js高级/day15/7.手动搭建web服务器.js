/**
 * Created by Administrator on 2017/3/9.
 */
//1.导入提供web服务器的模块 http
var http = require("http");
//2.利用http模块，创建一个服务器
var server = http.createServer();
/*3.让服务器去监听用户的http请求，然后处理用户(浏览器)的请求
* 参数一：监听request事件
* 参数二：事件发生后的回调函数
* */
server.on("request",function (request,response) {
console.log("有人访问我了");
//只是把数据写入到缓冲区
    response.write("hello");
    response.end();//结束这次响应，node会把数据响应给浏览器
});
//4.启动服务，让服务器监听某个具体的端口
server.listen(8888);//0 - 65535
