//coercion with templated string

let num = 10;
console.log("My num values is " + num);
console.log("My num values is", num);
console.log(`My num values is ${num}`);

console.log();

let obj = { x: 10, y: 20 };

console.log("My obj values is " + obj);
console.log("My obj values is" , obj);
console.log(`My obj values is ${obj}`);

//default implementation of object in toString is [object Object]
