// "use strict";//used to avoid auto global scope
var teacher = "Love Babbar";
function f() {
    var teacher = "Anuj Kumar";
    content="Java";//auto global creation
    console.log(teacher);
    console.log(content);
}

function g() {
    var student = "Sachin";
    console.log(student);
}

//console.log(content);
f();
g();
console.log(teacher);
console.log(content);

/* Reference link : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode */