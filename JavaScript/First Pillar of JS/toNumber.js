console.log(2 - "3");
console.log("3" - 2);

let a = "121" - "12";
console.log(a);

let b = "121" + "11";
console.log(b);

console.log(10 - null);
// 10 - 0(null is converted to +0 according to docs of ecma script) = 10
console.log(11 - undefined);//NaN  10 - undefined -> NaN

console.log(100 - true);//99  true converted to a number (1)
console.log(100 - false);//100 false converted to a number (+0)

let $ = 1;
let ans = 121 - $;//valid if you declare and intialise
console.log(ans);

/*
output
-1
1
109
12111
10
NaN
99
100
120

*/

console.log(1 - "7372");//1-7372 = -7371
console.log(10 - "1jdh87");//1- NaN = NaN




/* Assignment - Find how? */
console.log(1 - "0xa");//-9 , How ???
console.log(10-"F")//NaN

// ToNumber(10); 
console.log(10-"1");