const express = require('express');
const bodyParser = require('body-parser');

var server = express();
server.listen(8080);

// 中间件加工环节(链式操作)  POST需要，GET不需要
server.use(bodyParser.urlencoded({
    extended: true;  // 扩展模式
    limit: 2*1024*1024          // 限制-2M
})); 

server.use('/',function(req,res){
    console.log(req.body);  // post
});


// req.query 容纳GET数据
// req.body 容纳POST数据
