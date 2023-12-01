console.log(null == undefined);//true
console.log(undefined == null);//true

console.log(false == "0");
/*
x is boolean converted into ToNumber (false -> 0 ) and then do comparison 
x is now number and y is a string x is a number so y converted to a number after performing comparison
"0"---> 0
0==0  output is true;

*/

console.log(1 == "1");//right side string converted to number in abstract equality operator and then does comparison
console.log("2" == 2);//left side string converted to a number in abstract equality operator and then does comparison

//note : if any of the operand is a number and another one is a string then that string converted to a number


console.log(null == false);
/* y is boolean converted toNumber --> 0 and then comparison
null == 0
according to ecma script docs algorithm
return false
*/

console.log(false == null);
/* x is boolean converted toNumber --> 0 and then comparison
0 == null
according to ecma script docs algorithm
return false (step 10)
*/

console.log("NaN" == NaN);


let obj = {
    x: 1,
    valueOf() {
        return 10;
    }
}

console.log(99 == (obj * 10)); 
console.log(99 == ((obj * 10) - 1)); 
console.log(100 == (obj * 10)); 
