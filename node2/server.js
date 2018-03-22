const express = require('express');
const expressStatic = require('express-static');
// 创建服务
var server = express();

// 处理请求
// server.use('/a.html',function(req,res){
//     res.send('123');
//     res.end();
// });

server.get('/',function(req,res){
    console.log(req.query);
});


// 监听
server.listen(8080);

// server.use(expressStatic('./www'));


// 接收请求有三种方法：.get,.post,.use(.use既可以接收get请求，也可以接收post请求)