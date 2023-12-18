//print all even and odd number between 1 and 50

function isEven(n) {
    if ((n & 1) == 0) return "Even";
    else return "odd";

}


for (let i = 1; i <= 50; i++){
    console.log(i, "is", isEven(i));
}

console.log("Ended");