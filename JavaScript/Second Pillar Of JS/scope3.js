var teacher = "Love Babbar";
function f() {
    var teacher = "Anuj Kumar";
    content = "JS";//it get scope of auto global and it becomes an auto global
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
