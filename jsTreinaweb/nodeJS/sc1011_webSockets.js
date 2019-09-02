//1
    //requisitar o modulo e passar a porta que queremos trabalhar, por exemplo 3000
    var io=require('socket.io')(3000);
//2
    //Criar listener connection
    io.on('connection',(socket)=>{
        console.log('novo usuario conectado');
//4
    //tratar a mensagem recebida do cliente
        socket.on('client_hello',(data)=>{
            //formas de responder:
                //1-socket.emit: vc responde apenas para o cliente que te mandou a mensagem
                //2-socket.broadcasting.emit: vc responde a todos, menos vc;
                //3- io.socket.emit: vc responde a todos, inclusive vc
            io.sockets.emit('server_hello', data);
        })
    });

//3
    //Criar a parte do cliente com  arquivo 'h1011b_webSocketClient.html'
    //la colocar a biblioteca do socket.io num script para poder habilitar