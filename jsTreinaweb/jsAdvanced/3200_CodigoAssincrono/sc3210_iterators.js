let str='Treinaweb';
let myIterator=str[Symbol.iterator]();
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());

let RandomNumbers={
    [Symbol.iterator](){
        return this;
    },
    next(){
        let number=Math.floor(Math.random()*5),
        isEven=(number%2===0);

        return {value: number, done: !isEven}
    }
}
let numbers=RandomNumbers[Symbol.iterator]();

console.log([...numbers])

for(let number of numbers){
    console.log(number);
}

let Fibonacci={
    [Symbol.iterator](){
        let n1=1,
        n2=1;

        return{
            [Symbol.iterator](){
                return this;
            },
            next(){
                let current=n2;
                n2=n1;
                n1=n1+current;
                return {value: current, done: false}
            }
        }
    }
}

let fib=Fibonacci[Symbol.iterator]();
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());