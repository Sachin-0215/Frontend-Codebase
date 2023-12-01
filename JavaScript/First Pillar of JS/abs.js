//abstract equality
let x = 10;

//typeof() always return a string

console.log(typeof (x));

console.log(typeof(typeof (x)));
console.log(typeof(typeof (x))=='string');
console.log(null === undefined);
console.log(typeof(10)=='number');
console.log("10" === typeof ("10"));


/*
Output: 
number
string
true
false
true
false
*/