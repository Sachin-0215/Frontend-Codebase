function process() {
    let i = 10; let j = [11,12,2,111]; let k = 12;
    function innerProcess() {
        i += 1 + (j += k);
        console.log(j);
        return i;
    }
    return innerProcess;
}

x = process();
let obj = { func: x };
console.log(x);
console.log("1st time result is : ",x());
console.log("2nd time result is : ",x());
console.log("3rd time result is : ",x());
console.log("4th time result is : ",x());
console.log("5th time result is : ",x());
console.log("6th time result is : ",x());


// console.log(obj);