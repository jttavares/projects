//1
var http=require('http');

//7
//arquivo de resposta
var fs=require('fs');

//9
//Para saber que tipo de arquivo e url foi requisitado pelo cliente
var url=require('url');

//2
//função createServer tem dois paramentros
    //1- o tipo a requisição feita pelo cliente
        //-que url requisitou
    //2- a resposta que vamos enviar ao cliente
        //-texto, conteúdo e cabecalho que queremos enviar
var server=http.createServer(function(req, resp){
//10
    //pegar dados da url
    var url_parts=url.parse(req.url);
    //pegar caminho do arquivo
    var path=url_parts.pathname;

//8 - //11
    //escrever no arquivo de resposta
    //11- substituir o nome do arquivo por __dirname(com dois underlines seguidos) = variável do node que indica diretorio atual onde aplicação está
        //concatenar com nome do arquivo '+path'
    fs.readFile(__dirname + path,function(err, data){
//12
    //Se der algum erro na resposta
    if(err){
        resp.writeHead(404,{'Content-Type':'text/html'});
        resp.write('Not Found');
    } 
//13
    //Se não der erro, vamos retornar o conteúdo do arquivo
    else{
//3
        //escrever o cabecalho do objeto de resposta
        //primeiro parametro, status da resposta
        //proximo é o tipo de conteúdo que vamos passar
    resp.writeHead(200, {'Content-Type':'text/html'});
//4
    //passar o conteúdo do nosso arquivo
    resp.write(data);
    }

//5
    //fechar conexão
    resp.end();
    })
    
});

//6
//Agora deixar o servidor ouvindo pra ver se alguem está "batendo" em alguma porta chamando ele
    //colocamos como parametro a porta que ele deve escutar, neste caso a 3.000
server.listen(3000);


