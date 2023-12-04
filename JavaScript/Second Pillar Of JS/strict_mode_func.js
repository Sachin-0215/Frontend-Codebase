function myStrictFunction() {
    // Function-level strict mode syntax
    "use strict";
    function nested() {
      return "And so am I!";
    }
    return `Hi! I'm a strict mode function! ${nested()}`;
}
function myNotStrictFunction() {
    return "I'm not strict.";
}



let returnStatement = myStrictFunction();
console.log(returnStatement);

console.log(myNotStrictFunction);


function sum(a = 1, b = 2) {
    // SyntaxError: "use strict" not allowed in function with default parameter
    "use strict";
    return a + b;
  }

console.log(sum);

