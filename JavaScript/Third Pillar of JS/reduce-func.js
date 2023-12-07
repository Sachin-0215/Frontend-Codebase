/*
It is also a HOF. It is an interesting HOF available for arrays.
reduce also takes a function f as argument ,what reduce function does is ? it goes one by one to every element of the array.
Say the current element is arr[0]
reduce will pass this element to the function f , and accumulate the result of further function calls with this particular result

*/

const arr = [12, 3, 43, 4, 56, 6];

function sum(prevElement, currElement) {
    console.log(prevElement, currElement);
    return prevElement + currElement;
}

const sumArray = arr.reduce(sum);
console.log(sumArray);

/*

prev     curr
12        3
15        43
58        4
62        56
118        6
sum of all element in the array:  124
*/