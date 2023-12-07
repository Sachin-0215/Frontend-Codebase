/*
higher order function -> there are a function which take another function as argument ,thse are called HOF 
 
*/

function f(x, fn) {
    /*
    x -> number
    fn -> function
    */
    console.log(x);
    console.log(fn);
    fn();
}

f(10, function exec() {
    console.log("I am a expression passed on HOF");
})