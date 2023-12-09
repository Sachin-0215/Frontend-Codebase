function timeTakenByLoop() {
    console.log("Loops starts");
    for (let i = 0; i < 100000000; i++){
        //do some task
    }
    console.log("Loops ends here");
}

function timeTakenByRuntimeTimeoutFeature0() {
    console.log("Timer starts0")
    setTimeout(function f() {
        console.log("Runing till 200ms")
        for (let i = 0; i < 100000000; i++){
            //do some task
        }
        console.log("Timer ends here0");
    }, 200);//200 ms

}

function timeTakenByRuntimeTimeoutFeature1() {
    console.log("Timer starts1")
    setTimeout(function f() {
        console.log("Runing till 0ms")
        for (let i = 0; i < 100000000; i++){
            //do some task
        }
        console.log("Timer ends here1");
    }, 0);//0s timer

}

function timeTakenByRuntimeTimeoutFeature2() {
    console.log("Timer starts2")
    setTimeout(function f() {
        console.log("Runing till 5000ms")
        for (let i = 0; i < 100000000; i++){
            //do some task
        }
        console.log("Timer ends here2");
    }, 5000);//5 sec timer

}

console.log("Hii this is Your JavaScript Language");

timeTakenByLoop();
timeTakenByRuntimeTimeoutFeature0();
timeTakenByRuntimeTimeoutFeature1();
timeTakenByRuntimeTimeoutFeature2();
timeTakenByLoop();

console.log("Bye this is your js language sign of");