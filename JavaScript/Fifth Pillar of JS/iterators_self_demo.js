//reference link : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators

function fetchnextElement(array) {
    let idx = 0;
    function next() {
        // if length is equal to index return undefined array ele access from 0 to n-1
        if (idx == array.length) {
            return { value: undefined, done: true};
        }
        const nextElement = array[idx];
        idx += 1;
        // return nextElement;
        return { value: nextElement, done: false};

    }
    // return next;
    return {next};

}

//somewhere we consume it
const automaticFetcher = fetchnextElement([1, 2, 23, 3, 4, "ABCDGDH", 5, 6, 78])//inside automaticFetcher variable we can store next function

// console.log(automaticFetcher());
// console.log(automaticFetcher());
// console.log(automaticFetcher());
// console.log(automaticFetcher());
// console.log(automaticFetcher());
// console.log(automaticFetcher());
// console.log(automaticFetcher());
// console.log(automaticFetcher());
// console.log(automaticFetcher());
// console.log(automaticFetcher());
// console.log(automaticFetcher());

/*
output : 
1
2
23
3
4
ABCDGDH
5
6
78
undefined
undefined
*/


console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());

/*

{ value: 1, done: false }
{ value: 2, done: false }
{ value: 23, done: false }
{ value: 3, done: false }
{ value: 4, done: false }
{ value: 'ABCDGDH', done: false }
{ value: 5, done: false }
{ value: 6, done: false }
{ value: 78, done: false }
{ value: undefined, done: true }
*/