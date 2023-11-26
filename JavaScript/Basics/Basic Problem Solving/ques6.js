//wap to print all the even numbers greater than 1 and less than 25

// let i = 2;
// for (i; i < 25; i += 2){
//     console.log(i);
// }

let i = 1;
for (i; i < 25; i++){
    if ((i & 1) == 0) console.log(i);
}

// for (i; i < 25; i++){
//     if ((i % 2) == 0) console.log(i);
// }
console.log("Ended");
console.log(i);