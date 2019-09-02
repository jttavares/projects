var fs=require('fs');

/*console.time('Assincrono');
var counter=0;

for (let i = 0; i < 1000; i++) {
    fs.readFile('teste.txt', function(err, data){
        if (err) {
            return console.error(err);
        }
        counter++;
        console.log('Assincrono: '+data.toString());
        if (counter===1000) {
            console.timeEnd('Assincrono');
        }
    })
}*/

/*console.time('Sincrono');
for(var i=0;i<1000;i++){
    var data =fs.readFileSync('teste.txt');
    console.log('Sincrono: '+data);
}
console.timeEnd('Sincrono');*/

Promise= require('promise');

function read(file){
    return new Promise(function(fulfill, reject){
        fs.readFile(file,function(err, data){
            if(err){
                reject();
            }else{
                fulfill(data.toString());
            }
        })
    })
}

read('teste.txt')
.then((data)=>{
    console.log(data);
    return '1111';
})
.then((data)=>{
    console.log(data);
    return '2222';
})
.then((data)=>{
    console.log(data);
    return '3333';
})
.then((data)=>{
    console.log(data);
    return '4444';
})
