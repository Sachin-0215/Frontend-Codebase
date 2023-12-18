//reference link : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators

function fetchnextElement(array) {
    let idx = 0;
    function next() {
        if (idx == array.length) {
            return undefined;
        }
        const nextElement = array[idx];
        idx += 1;
        return nextElement;
    }
    // return next;
    return {next};

}

//somewhere we consume it
const automaticFetcher = fetchnextElement([1, 2, 23, 3, 4, "ABCDGDH", 5, 6, 78])//inside automaticFetcher var we can store function

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
// console.log(automaticFetcher.next());
