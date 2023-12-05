"use strict"
{
    function f() {
        return "123";
    }
    console.log(f());//123
}
console.log(f());//ReferenceError: f is not defined

/* function are immune to the coresponding block */