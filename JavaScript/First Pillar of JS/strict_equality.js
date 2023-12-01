/*  https://262.ecma-international.org/10.0/#sec-strict-equality-comparison
algorithm given in above docs
The comparison x === y, where x and y are values, produces true or false. Such a comparison is performed as follows:

1. If Type(x) is different from Type(y), return false.
2. If Type(x) is Number, then
    a. If x is NaN, return false.
    b. If y is NaN, return false.
    c. If x is the same Number value as y, return true.
    d. If x is +0 and y is -0, return true.
    e. If x is -0 and y is +0, return true.
    f. Return false.
3. Return SameValueNonNumber(x, y).

[NOTE  : This algorithm differs from the SameValue Algorithm in its treatment of signed zeroes and NaNs.]


*/
console.log(typeof NaN);
console.log(typeof 0);



console.log(10===10)
console.log(NaN === 0);


let obj = {valueOf(){return 10;}}
console.log(99 === ((obj * 10) - 1)); 
