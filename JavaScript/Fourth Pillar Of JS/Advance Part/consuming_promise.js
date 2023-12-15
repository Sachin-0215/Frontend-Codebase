// setTimeout(function exec() {
//     console.log("done")
// }, 3000);


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function createPromiseWithTimeOUT() {
    return new Promise(function executor(resolve, reject){
        console.log("Entering the executor callback in the promise constructor");
        setTimeout(function () {
            let num = getRandomInt(10);
            if (num % 2 == 0) {
                //if the random number is even we fullfill 
                resolve(num);
            }
            else {
                //if random no. is odd we reject
                reject(num);
            }
        }, 10000);
        console.log("Exitting the executor callback in the promise constructor");
    })
}


console.log("Starting.....");
const P = createPromiseWithTimeOUT();//P is global scope accesible everywhere
console.log("We are now waiting for the promise to complete");
console.log("Currently my promise object is like....", P);
console.log("Going to register my 1st set of handlers");

P.
    then(
        function fullfillHandler(value) {
            console.log("Inside fullfill handler 1 with value", value);
            console.log("Promise after fullfillment is ", P);
            setTimeout(function t() {
                console.log("Ended 1s timer")
            }, 1000);
            console.log("exiting full handler 1");
        },
        function rejectionHandler(value) {
            console.log("Inside rejection handler 1 with value", value);
            console.log("Promise after rejection is ", P);
            setTimeout(function t() {
                console.log("Ended 1s timer");
            }, 1000);
            console.log("exiting reject handler 1")
        }

);

console.log("Going to register my 2nd set of handlers");

P.
    then(
        function fullfillHandler2(value) {
            console.log("Inside fullfill handler 2 with value", value);
            console.log("Promise after fullfillment is ", P);
        },
        function rejectionHandler2(value) {
            console.log("Inside rejection handler 2 with value", value);
            console.log("Promise after rejection is ", P);
        }

);

console.log("Ending ");

// for (let i = 0; i < 100000000; i++){
//     //some work
// }
// console.log("Loop Ended Now");


setTimeout(function () {
    console.log("Global timer of 2000ms");
}, 2000);

// console.log(P);
// console.log(typeof P);