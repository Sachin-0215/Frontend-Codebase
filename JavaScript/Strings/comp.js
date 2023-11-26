let isEqual = "abc" == "abc";
let isEqual2 = "abc" === "abc";

console.log(isEqual,isEqual2);

console.log(isEqual == isEqual2);

let z = new String("äbc");
console.log(typeof z); 
let stri = "My name is string literal"
console.log(stri);
console.log(typeof stri);

console.log(z);


let str1 = "abc";//string literal
let str2 = "abc";//string literal
let str3 = new String("abc");//string object
console.log(str3 == str1);
console.log(str3 == str2);
console.log("abc"==new String("xyz"));
console.log("\n")

/* 
Note : Whenever you are created a normal string then it is a string literal and whenever you are creating string using new keyword then it becomes an string object
*/

let Str1 = "abc";
let Str2 = "abc";
let Str3 = new String("abc");
console.log(Str3 === Str1);
console.log(Str2 === Str1);

console.log(Str3 === Str2);
console.log("abc" === new String("xyz"));
console.log(typeof Str1)//string
console.log(typeof Str2)//string
console.log(typeof Str3)//object


/* in === if types are different and you compare both of them then it return false if different
    but in == , it tries to convert the types and if you comparing both then if it is looks as same then output will be true
*/