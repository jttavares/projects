let Dog={
    name:'Diggo',
    sayName:function(){
        console.log(this.name);
    }
}

let Cat={
    name:"Gumball"
}

Dog.sayName.call(Cat);

console.log('Executando função de array em string: ');

[].forEach.call('my string', function(letter){
    console.log(letter);
})