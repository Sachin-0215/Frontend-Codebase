function* fetchnextElement() {//generator function
    console.log("I am inside the generator function");
    yield 1;
    yield 2;
    console.log("Somewhere in the middle");
    yield 3;
    yield 4;
    return 11;
    // return "s";
}


const iter = fetchnextElement();

console.log(iter);
console.log("1st",iter.next());
console.log("2nd",iter.next());
console.log("3rd",iter.next());
console.log("4th",iter.next());
console.log("5th", iter.next());
console.log("6th",iter.next());



/*
Object [Generator] {}
I am inside the generator function
1st { value: 1, done: false }
2nd { value: 2, done: false }
Somewhere in the middle
3rd { value: 3, done: false }
4th { value: 4, done: false }
5th { value: 11, done: true }
6th { value: undefined, done: true }
*/