// It is an interesting API.Set Intervals takes a callback function

setInterval(function () {
    console.log("another one at 1000s");
}, 1000)

//this will run and print at every 1000ms

setInterval(function () {
    console.log("another second one at 500ms")
}, 500);

//this will run and print at every 1000ms then nextOne print at every 500ms
