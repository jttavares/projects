var EventEmitter=require('events');


class Cao extends EventEmitter{
    latir(){
        console.log('Au, au');
    }
}

var Rex=new Cao();
Rex.on('pessoa_no_portao', Rex.latir);

Rex.emit('pessoa_no_portao');
Rex.emit('pessoa_no_portao');
Rex.removeAllListeners();
Rex.emit('pessoa_no_portao');