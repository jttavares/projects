function double(number){
    if(typeof number !== 'number'){
        throw new Error(`value expected: number. value received: ${typeof number}`);
    }
    console.log(number*2) ;
}



console.log(double('abc'));
console.log(double(3));