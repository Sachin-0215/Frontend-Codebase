console.log(Number("123"));//convert to a number printing 123 
console.log(typeof Number("123"));//number
console.log("123");//printing as it is like a string
console.log(typeof ("123"));//string
console.log(); 

/*
123
number
123
string

*/

console.log(Number("abcd"));//not convert into number
console.log(Number("0xa"));//convert string to hexa ,hexadecimal to decimal

let x = NaN;
console.log(x == NaN);

if (typeof(x) == 'number' && x != x) {
    console.log("If else ",true);//if x is NaN then it print else not print this line
}

console.log(isNaN(x));
console.log(isNaN("Sachin")); 
console.log();

/*Ouput
NaN
10
false
true
true
*/
//Note : isNaN is converts the incoming input into a Number

console.log(Number.isNaN("Sachin"));





//reference link : https://262.ecma-international.org/10.0/#sec-isnan-number