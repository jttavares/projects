let myString='Abc abc Abc abc';

console.log(myString.replace('a',1));
console.log(myString.replace(/a/gi,1));

let myString2='abc-954-def',
regexp=/(ab)c-(\d{3})-def/;

console.log(myString2.replace(regexp,'my number: $1-$2'))

