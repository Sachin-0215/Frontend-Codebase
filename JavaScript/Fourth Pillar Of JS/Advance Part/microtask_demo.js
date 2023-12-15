function createPromise() {
    return new Promise(function exec(resolve, reject) {
        console.log("Resolving the promise");
        resolve("Done");
    });
}

setTimeout(function exec() {
    console.log("Timer completed");
}, 1000);

let p = createPromise();
p.then(function fullfillHandler(value) {
    console.log("we fullfilled with a value", value);
}, function rejectionHandler() {});

console.log("Ending"); 

