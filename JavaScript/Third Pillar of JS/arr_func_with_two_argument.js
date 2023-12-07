const newArray = [9, 8, 7, 5, 4, 1];

function getElementWithIndex(Element, idx) {
    return `Element at index ${idx} is ${Element}`;
}

/*
if func that we are passing takes two argument then first argument will be accessing the actual value second argument will be accessing index of that value
*/

const resultantArray = newArray.map(getElementWithIndex);

console.log(resultantArray);
/*
here map is looping over every element and then passing elemnt ,index in the function getElementWithIndex
*/

//reference : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map