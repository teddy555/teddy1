/**
 * Created by Administrator on 2017/3/9.
 */
//导入 express 模块
var express = require('express');
var fs = require('fs');

//获取一个app对象
var app = express();
app.get("/user.html",function (req,res) {
    // res.setHeader("Content-Type","text/html;charset=utf-8");
    // res.send("<h1>你好，这是第一个node.js项目</h1>");
    fs.readFile("post.html","utf-8",function (err,data) {
        res.send(data);
    })
});
app.get('/xxx.html',function (req,res) {
    // res.send('<h1>你好，这是第一个node.js项目</h1>');
    fs.readFile("a.jpg",function (err,data) {
        res.send(data);
    })
});
app.post("/",function (req,res) {
    res.send("<h1>你好,我是post</h1>");
});
app.listen(555);