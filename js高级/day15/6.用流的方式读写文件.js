/**
 * Created by Administrator on 2017/3/9.
 */
var fs = require("fs");
var read = fs.createReadStream("a.jpg");
// var write = fs.createWriteStream("");
read.on("data",function (data) {
    console.log(data);
    // write.write(data);
});
