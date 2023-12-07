/*
Arrays are also custom objects in JS,index of the element is the key and the element itself is the value

["abc","def","ghi"]  ->  {0:"abc",1:"def",2:"ghi"}
*/

/**
map function  - It is HOF available with arrays 
It takes a function as an argument -> f.
It return an arrays in which every value is actually populated by calling function f with original array element as an argument.

every element of the original array is passed one by one in the argument function f
whatever is the output for each individual element ,we populate that output in an array

map is internally iterate over every element of the given original array pass that element in the argument function f and then store the returned value inside an aray
*/


function Square(element) {
    return element * element;//this function return sq of element 
}

function cube(element) {
    return element * element*element;//this function return cube of element 
}

function isEvenOrOdd(x) {
    if ((x & 1) == 0) return "Even";
    return "Odd";
}

const array = [21, 12, 17, 19, 18, 121,49,19,2];//original array
const resultArr = array.map(Square);//Square is an function passed as an argument, just putting the name of the function not calling here

console.log(resultArr);//[ 441, 144,289,361, 324, 14641,2401, 361]

const cubeArray = array.map(cube);
console.log(cubeArray);

const resEvenOrOdd = array.map(isEvenOrOdd);
console.log(resEvenOrOdd);


/*

sq(21)->441
sq(12)->144
sq(17)->289
sq(19)->361
sq(18)->324
sq(121)->14641
sq(49)->2401
sq(19)->361
*/
