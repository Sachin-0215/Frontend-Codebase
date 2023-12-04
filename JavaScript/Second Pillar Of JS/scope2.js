"use strict";//used to avoid auto global scope
var teacher = "Arun";
function f() {
    var teacher = "Arun Madhav";
    console.log(teacher);
}
function g() {
    var student = "Sachin";
    technology = "Next.js";
    console.log(student);
}

// console.log(technology);not defined in global
f();
g();
console.log(teacher);
console.log(technology);//defined in g scope auto global scope 
