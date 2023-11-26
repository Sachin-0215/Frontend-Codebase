/*
        Rules of creating a variable name in Javascript
    # Variables name can contain small alphabets or,capital,digits,underscore(_) and dollar ($) are also allowed.
    # We can't have space or any any other special character.
    # We should give meaningfull names so that readers can identify the names properly.
    # Variable name can't start with a digit but it can have digits in between or last.
    # we can't use keywords as variables names.

*/

var bigValue = 210101001111111111111111111111111111111111111;
console.log(typeof (bigValue));//number

// var !variable = 100;//error
var variable10 = 20;//valid
let ALGORITHM = "Binary Search";//valid
// let @js = 100;invalid
// let js$js@ = 1; invalid
// let js@ = 100;invalid

let name = "James Bond";
// let doYouknow DSA = true;//INVALID
let doYouknowDSA = true;//valid




