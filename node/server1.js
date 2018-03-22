const http = require('http');
const querystring = require('querystring');

var server = http.createServer(function(req,res){
    var GET = {};
    if(req.url.indexOf('?') != -1){
        var arr = req.url.split('?'); 

        // // arr[0] => 地址 '/aaa'
        // // arr[1] => 数据 'user=wjx&pass=111111'
        // var arr2 = arr[1].split('&');
        // // arr2 => ['user=wjx','pass=111111']
        // for(var i = 0;i < arr2.length;i++){
        //     var arr3 = arr2[i].split('=');
        //     // arr3[0] => 名字 'user'
        //     // arr3[1] => 数据 'wjx'
        //     GET[arr3[0]] = arr3[1];
        // }
        
        var url = arr[0];
        GET = querystring.parse(arr[1]);
    }else{
        var url = req.url;
    }
    console.log(url,GET);

    // req 获取前台数据请求
    res.write('qqq');
    res.end();
});

server.listen(8080);