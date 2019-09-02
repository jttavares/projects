//Usamos o modulo 'events' que já vem com o node
var EventEmitter=require('events');

//A seguir vamos instanciar um novo emissor
var emitter=new EventEmitter();

//para deixar emissor aguardando algo acontacer, usamos a propriedade 'on'
//passamos o nome do evento que ele deve aguardar, no caso abaixo 'meu_evento'
//depois colocamos a função de callback que ele deve executar quando ouvir o evento
emitter.on('meu_evento', function(numero){
    console.log('meu evento', numero);
});

//Quando queremos que o evento seja executado enviamos um emit com o nome do evento que queremos
emitter.emit('meu_evento',123);

