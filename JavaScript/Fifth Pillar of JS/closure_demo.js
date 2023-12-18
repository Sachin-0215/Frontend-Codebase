function DO(task) {//local to DO()
    setTimeout(function exec() {
        console.log(task);
    },1000);
}

DO(11);
console.log("end");