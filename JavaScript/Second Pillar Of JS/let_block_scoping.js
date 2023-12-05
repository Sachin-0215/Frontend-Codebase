// console.log(teacher);//can't access before intialisation error
// let teacher = "S";

console.log(teacher);//undefined you can access with var but not in let
var teacher = "Sachin";//global scope
function f() {//global scope
    console.log(teacher);//no error will be given
    console.log(content);//throws an error if content is let type [this concept is called as TDZ]
    var content = "JS";//scope of fun
    // let content = "JS";//content will be accesed only post declarations
    var teacher = "Pulkit";//scope of fun
    if (content == "JS") {
        // let hours = "120+";//this is accessed only if block can't accesed outside the block
        var hours = "120+";
        console.log(teacher,content, hours);
    }
    console.log(teacher, content);
}

f();
console.log(teacher);
// console.log(content);//ReferenceError: content is not defined

/* TDZ (Temporal Dead Zone) :  the region before the declaration of the variable which is having a block scope made by let is actually called as TDZ that means you can't accessed the variable which is having a block scope before it has been declared*/


/*
var -  function scope
let - block scope
*/