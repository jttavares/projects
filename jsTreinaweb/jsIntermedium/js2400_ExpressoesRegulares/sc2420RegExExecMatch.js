let regexp=/a.c/g,
myString="123abc456 4a3c";

console.log(regexp.exec(myString));

console.log(myString.match(regexp));