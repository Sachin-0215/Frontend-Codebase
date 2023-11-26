//check a valid triangle 
/* given 3 integers a,b,c check if we can form a traingle with a sides of the traingle having length a,b,c */

let a = 10, b = 12, c = 21;

if ((a + b) > c && (a + c) > b && (b + c) > a) {
    console.log("Yes we can form a traingle");
}
else{
    console.log("No we can't form a traingle");
}
