if(true)
{
    var x = 10;
}

console.log(x);

function f() {
    console.log(y);//y is accessible here
    var y = 10;//not accesible outside
}

// Note : var create a function scope and let create a block scope

function g() {
    console.log(z);
    // var z = 10;
    let z = 10;//hoisting
}
g();