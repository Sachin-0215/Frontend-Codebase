function f(x, fn) {
    for (let i = 0; i < x; i++){
        console.log(i);
    }
    fn(x * x);
}


f(10, function g(a) {
    console.log("Function call");
    console.log(a);
});