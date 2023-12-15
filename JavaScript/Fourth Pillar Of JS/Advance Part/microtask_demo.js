function createPromise() {
    return new Promise(function exec(resolve, reject) {
        console.log("Resolving the promise");
        resolve("Done");
        
    });
}

setTimeout(function exec() {
    console.log("Timer completed");
}, 10000);

let p = createPromise();//
p.then(function fullfillHandler1(value) {
    console.log("we fullfilled1 with a value", value);
}, function rejectionHandler() {});

p.then(function fullfillHandler2(value) {
    console.log("we fullfilled2 with a value", value);
}, function rejectionHandler() {});

p.then(function fullfillHandler3(value) {
    console.log("we fullfilled3 with a value", value);
}, function rejectionHandler() {});

for (let i = 0; i < 1000000; i++) { }

console.log("Ending"); 

//understanding the microtask queue
/*
At any point of time if event loop has a choice to pick from microtask queue or callback queue(Microstask queue) then it always give preference to microtask queue.
*/



/*
|           |                    runtime 
|           |                 
|           |
|           |                event loop 
|           |
|           |
|           |
|           |                    callback queue
|           |                  [            ]
|           |                   
|           |                 [ ]
|           |                  microtask queue
|___________|

   stack



*/