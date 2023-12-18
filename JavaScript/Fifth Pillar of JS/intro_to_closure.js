function process() {
    let i = 0;//local variable block scope
    function innerProcess() {
        i += 1;//this i is coming from process() js knows about it
        return i;
    }
    return innerProcess;//we are not returning a value , just returning a function
}

let result = process();//this line calls the function which return another function
console.log(result);
console.log("1st time result is : ",result());
console.log("2nd time result is : ",result());
console.log("3rd time result is : ",result());
console.log("4th time result is : ",result());
console.log("5th time result is : ",result());
console.log("6th time result is : ",result());













// console.log(r); 
// let r = innerProcess();