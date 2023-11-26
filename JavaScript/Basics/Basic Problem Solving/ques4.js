//given three sides length of a traingle. Check if the given triangle is equilateral or scalene or isosceles

let a = 110, b = 11, c = 112;
if (a == b && a == c && b == c) {
    console.log("Equilateral");
}
else if (a == b || a == c || b == c) {
    console.log("isoceles");
}
else {
    console.log("Scalene");
}