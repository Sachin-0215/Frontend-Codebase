function createPromise() {
    return new Promise(function exec(resolve, reject) {
        setTimeout(function () {
            console.log("Rejecting the promise");
            reject("Not done"); 
        },100200)
    });
}

let p = createPromise();
p.then(function fullfillHandler1(value) {
    console.log("we fullfilled1 with a value", value);
}, function rejectionHandler(value) {
    console.log("rejecting the handler1 with a value ", value);
});

p.then(function fullfillHandler2(value) {
    console.log("we fullfilled2 with a value", value);
}, function rejectionHandler(value) {
    console.log("rejecting the handler2 with a value ", value);
});


for (let i = 0; i < 10000000000000; i++) { 
    //this body will execute and take some time also
}

console.log("Ending"); 
