function blocking_for_loop() {
    for (let i = 0; i < 10000; i++){
        //some work
    }
}

console.log("Start of the file");//----------------->1
setTimeout(function timer1() {
    console.log("Timer 1 done");
}, 0);

blocking_for_loop();
let x = Promise.resolve("JS promise1");
x.then(function processPromise(value) {
    console.log("Whose promise ?", value);//---------->3
    blocking_for_loop();
});
let y = Promise.resolve("JS Promise2");
y.then(function processPromise(value) {
    console.log("Whose promise ?", value);//--------------->3
    setTimeout(function f() { console.log("Okay Done"); }, 0);
});
let z = Promise.resolve("JS Promise 3");
z.then(function processPromise(value) {
    console.log("Whose Promise ? ", value);//--------------->5
});

setTimeout(function timer2() {
    console.log("Timer 2 done");
}, 0);
console.log("END OF THE FILE");//--------------->2