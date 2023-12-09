function timeTakenByLoop() {
    console.log("Loops starts");

    for (let i = 0; i < 1000000; i++){
        //do some task
    }

    console.log("Loops ends here");

}

function timeTakenByRuntimeTimeoutFeature() {
    console.log("Timer starts")
    setTimeout(function f() {
        console.log("Runing till 5000ms")
    }, 5000);
    console.log("Timer ends here");

}

console.log("Hii this is Your JavaScript Language");

timeTakenByLoop();
timeTakenByRuntimeTimeoutFeature();
timeTakenByLoop();

console.log("Bye");