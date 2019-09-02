console.log('perda de referencia do this');
let myObj={
    name:'Treinaweb',
    sayname(){
        console.log(this.name);
        setTimeout(function(){
            console.log(this.name);
        },200);
    }
}

myObj.sayname();

console.log("Indicando quem será o 'this' através da função 'bind'")
let myObj2={
    name:'Treinaweb',
    sayname(){
        console.log(this.name);
        setTimeout(function(){
            console.log(this.name);
        }.bind(this),2000);
    }
}
myObj2.sayname();

myFunc.call(this,1,2,3);

myFunc.apply(this,[1,2,3]);

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