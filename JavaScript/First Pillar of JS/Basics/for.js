let ans = 0;
for (let i = 0; i <= 10; i++){
    ans += i;
}
console.log(ans);

let j = 0;
for (j; j <= 20; j += 2){
    console.log(j);//0      2    6   14   
    j += j;//0 2 6  14   30
}

console.log(j);