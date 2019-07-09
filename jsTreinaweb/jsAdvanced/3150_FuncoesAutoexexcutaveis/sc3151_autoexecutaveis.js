(function ola(){
    console.log('Ola');
})();

(function(){
    console.log('Outro Olá');
})();

console.log('Passando Parametros');

(function soma(a,b){
    let c= a+b;
    console.log(c)
})(4,4);