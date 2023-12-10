console.log("Hello World");
for (let i = 0; i < 3; i++){
    setTimeout(function exec() {
        console.log("Timer done at 1000ms");
    }, 1000);
}

for (let i = 0; i < 1000000000; i++){
    //some task //10s
}
console.log("end");