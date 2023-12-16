//Priority order of execution
/**
Callstack                 >             microtask       >           callback queue / microtask queue
(global piece of code)
 */


console.log("Start of the file");
setTimeout(function timer1() {
    console.log("Timer 1 done");
}, 0);

for (let i = 0; i < 10000000000; i++){
    //some piece of work
}

/*
function f(resolve, reject) {
    return new Promise(function exec(resolve, reject) {
        resolve("JS Promise");
    })
}
                         |
                         |
             shorthand of this
                       Promise.resolve("JS Promise");
*/

let x = Promise.resolve("JS Promise");
x.then(function processPromise(value) {
    console.log("Whose Promise", value);
})

setTimeout(function timer2() {
    console.log("Timer 2 done");
}, 0);

console.log("End of the file");