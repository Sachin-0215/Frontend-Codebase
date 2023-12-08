/*
There are two types of callback problem : 
1. Inversion of control (Bigger problem)
2. CallBack hell : reference link (https://callbackhell.com/)   images : https://res.cloudinary.com/practicaldev/image/fetch/s--c0aEZX7m--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/b8euo2n7twvgh3dbuatd.jpeg
        code is hard to understand what it is doing  , callback hell is readablity problem

*/


// let arr = [111, 2, 33, 4, 151, 116];

// arr.sort(function cmp(a, p) {
//     return (a - p);
// })


// console.log(arr);


function doTask(fn, x) {
    //let's say whole implementation of code is implemented by team A;
    fn(x * x);//calling my callback with square of x

    //after some time someone change by mistake
    // fn(x * x);
    //this function is written by team A
}

//here team b tries to use it
doTask(function exec(num) {//exec function is callback ,    due to callbacks , I am Passsing control of how exec should be called to doTask
    //this is callled as inversion of control
    console.log("Num value is ", num);
}, 9);

