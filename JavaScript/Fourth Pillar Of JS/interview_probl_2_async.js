console.log("hii");
setTimeout(function exec() {
    console.log("Timer done at 0ms");
}, 0);
for (let i = 0; i < 100000000; i++){
    //some task are perform here //10s
    if (i == 99999999) console.log(i);
}
console.log("end");