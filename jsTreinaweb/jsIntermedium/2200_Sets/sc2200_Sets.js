//Sets são coleções com valores únicos

let mySet=new Set();
let a={value:1},
b={value:2};

mySet.add(a);
mySet.add(b);
mySet.add(a);

mySet.has(a);
mySet.delete(a);
mySet.clear(a);
mySet.size();