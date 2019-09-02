let myVar=5;
let myVar2=10;

function myFunc(){
    console.log('TreinaWeb');
}

 class Calc{
    static sum(a,b){
        return a+b;
    }
}
//ou vc pode exportar tudo de uma vez
export{myVar, myFunc,Calc as MyClass}