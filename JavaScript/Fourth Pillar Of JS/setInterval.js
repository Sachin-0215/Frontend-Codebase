// It is an interesting API.Set Intervals takes a callback function

// setInterval(function () {
//     console.log("another one at 1000s");
// }, 1000)

// //this will run and print at every 1000ms

// setInterval(function () {
//     console.log("another second one at 500ms")
// }, 500);

//this will run and print at every 1000ms then nextOne print at every 500ms


//to stop the interval we can store their id into a variable and then pass that id in clearInterval to stop the interval

let x = setInterval(function () {
    console.log("another one at 1000ms");
},1000)

let v = setInterval(function () {
    console.log("another interval at 500ms");
}, 500);

clearInterval(x);
clearInterval(v);

//not running because using id , we are using clearInterval