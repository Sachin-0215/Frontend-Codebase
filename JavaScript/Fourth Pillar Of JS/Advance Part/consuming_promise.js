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
console.log("Starting");
const P = createPromiseWithTimeOUT();//P is global scope accesible everywhere
console.log("We are now waiting for the promise to complete");
console.log("Currently my promise object is like....", P);
P.
    then(
        function fullfillHandler(value) {
            console.log("Inside fullfill handler with value", value);
            console.log("Promise after fullfillment is ", P);
        },
        function rejectionHandler(value) {
            console.log("Inside rejection handler with value", value);
            console.log("Promise after rejection is ", P);
        }

);

console.log(P);
console.log(typeof P);