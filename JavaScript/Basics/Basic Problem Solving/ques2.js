//consider 3 integer and find minimum of value among the given input values

let a = 1999;
let b = 300;
let c = 1100;

if (a > b && c > b) {
    console.log(b, "is minimum");
}
else if (a > c && b > c)
{
    console.log(c, "is minimum");
}
else {
    console.log(a, "is minimum");
}