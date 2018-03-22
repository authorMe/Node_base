const http = require("http");
// 创建服务(参数为一个回调函数)
var server = http.createServer(function(req,res){
    switch(req.url){
        case '1.html':
            res.write('11111')
            break;
        case '2.html':
            res.write('2222')
            break;
        default:
            res.write('404')
            break;
    };

    res.end();
});
// 监听--等待
// 端口--数字
server.listen(8080);