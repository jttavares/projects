console.log('Recursividade ocorre quando uma função chama ela mesma.');
console.log('Um exemplo disso é o Fatorial.');

console.log('forma tradicional');
function factorial2(n){
    if (n===0) {
        return 1;        
    }else{
        let product=1;
        for(let i=1;i<=n;i++){
            product*=i;
        }
        return product;
    }
}

console.log('Usando recursividade');

function factorial(n){
    if(n===0){
        return 1;
    }else{
        return n * factorial(n-1);
    }
}