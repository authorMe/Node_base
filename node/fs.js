const fs = require('fs');

// readFile(文件名，回调函数)
fs.readFile('aa.txt',function(err,data){
    if(err){
        console.log('读取失败');    
    }else{
        console.log(data.toString());
    }
});
// writeFile(文件名，内容，回调函数)
fs.writeFile('bb.txt','aaaaaaaeyt',function(err){
    console.log(err);
});