function* fetchnextElement() {
    console.log("Inside a generator function");
    const x = 10;
    console.log(yield 11);
    console.log("entering after a yield");
    const y = x + (yield 30);
    console.log("value of y is", y);
    return 11;
}

console.log("start");
const iter = fetchnextElement();
console.log("started call generator");

console.log("first iteration", iter.next(1111));
console.log("second iteration", iter.next());
console.log("third iteration", iter.next(8));
console.log("fourth iteration", iter.next());

