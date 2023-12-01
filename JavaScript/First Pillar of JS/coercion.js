//coercion is also known as implicit type conversion (automatically convert one type to another)

let a = 13 + "12";
console.log(a);//concatenate 1312
console.log(5 + 1 + "2" + 2 + 1);//concatenate 6221
console.log(12 + 1);
console.log(12 - "1");//11 , how?

console.log(12 * "13");
console.log(121 / "41");
console.log(21 % "31");
console.log("21" * 51);

let variable = toString(111)
console.log(typeof variable);
console.log(variable);
console.log(variable - 12);


/*
output
1312
6221
13
11
156
2.951219512195122
21
1071
*/
