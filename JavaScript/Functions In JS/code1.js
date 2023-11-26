//check if the given number in the input is even or not


function isEven (number) {
    if ((number & 1) == 0) return true;
    else return false;
}


let isEvenorNot = isEven(11);
console.log(isEvenorNot);


for (let i = 1; i <= 25; i++){
    let result = isEven(i);
    result ? console.log(i, "Even") : console.log(i, "Odd");

}

console.log("Ended");

let x = 10;
let y = 11;
let z = 7;

if (isEven(x)) console.log(x, "Even");
else console.log(x, "odd");

if (isEven(y)) console.log(y, "Even");
else console.log(y, "odd");

if (isEven(z)) console.log(z, "Even");
else console.log(z, "odd");

