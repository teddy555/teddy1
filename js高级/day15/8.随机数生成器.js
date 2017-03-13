/**
 * Created by Administrator on 2017/3/9.
 */
var http = require("http");
var url = require("url");
var server = http.createServer();
server.on("request",function (request,response) {
    console.log("有人访问我了");
    /*
    * request.url  浏览器请求的原始url
    * true  表示把查询请求也进行解析为
    * query  得到解析后的查询参数组成的js对象
    * num  得到具体的参数的值
    * */
    var num = url.parse(request.url,true).query.num;
    var ran = parseInt(Math.random()*num);
    response.write("hello "+ran);
    response.end();//结束这次响应，node会把数据响应给浏览器
});
server.listen(888);//0 - 65535
