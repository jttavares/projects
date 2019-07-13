let myObj={
    a:1,
    b:2
}

let myProxy=new Proxy(myObj,{
    get: function(target, prop, receiver){
        console.log(`Você acessou ${prop}`);
        return target[prop];
    },
    set: function(target, prop, value){
        console.log(`Você acessou: ${prop} `);
        target[prop]=value;
        return true;
    }
})