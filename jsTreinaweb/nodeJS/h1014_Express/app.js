var express=require('express');

var app=express();
/*
app.get('/abc/:id?',function(req, res){
    res.send('Hello World! '+req.params.id);
});*/

//fazendo um middleware
app.use('/default',express.static('public'))
app.get(/((sh)|(x))amp(o{2}|u)/,function(req, res){
    res.send('Hello World! ');
});

app.listen(3000, function(){
    console.log(`App rodando na porta 3000`);
})