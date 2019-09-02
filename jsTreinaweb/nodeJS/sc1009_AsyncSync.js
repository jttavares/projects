var fs=require('fs'),
Promise=require('promise');

function read(file){
    return new Promise(function(fulfill, reject){
        fs.readFile(file, function(err, data){
            if(err){
                reject();
            }else{
                fulfill(data.toString());
            }
        })
    })
}

read('my_file.txt').then((data)=>{
    console.log(data);
    return '11111';
})
//Pode-se encadear vários .then e passar valores para os proximos
.then((data)=>{
    console.log(data);
    return '2222';
})
.then((data)=>{
    console.log(data);
    return '3333';
})
.done((data)=>{
    console.log(data);
});
