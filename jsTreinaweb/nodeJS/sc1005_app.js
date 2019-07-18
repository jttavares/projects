console.log('Hello World');

for(let i=0;i<5;i++){
    console.log('Hello World'+' '+i);   
}

console.log('Usando modulos');
let moduloCachorro=require('./sc1005b_cachorro');

console.log(moduloCachorro.nome);
console.log(moduloCachorro.latir());