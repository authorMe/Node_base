var http = require('http');

http.createServer(function(req,res){
    var str = '';  // 接受数据
    // POST 数据分段传送
    // data 有一段数据到达就执行(发生很多次) 
    var i = 0;
    req.on('data',function(data){
        console.log(`第${i++}次收到数据`);
        str += data;
    });
    // end 数据全部到达(一次)
    req.on('end',function(){
        // console.log(str);
    });
}).listen(8080);