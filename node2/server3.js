const express = require('express');
const bodyParser = require('body-parser');

var server = express();
server.listen(8080);


server.use('/',function(req,res,next){
    console.log('a'); 
    next();  // 链式操作
});
server.use('/',function(req,res,next){
    console.log('b');  
});
