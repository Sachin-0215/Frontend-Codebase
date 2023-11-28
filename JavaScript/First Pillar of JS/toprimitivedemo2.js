let object = {
    x: 10,
    valueOf() {
        //by default it returns the same object
        
    }
}
let obj = {
    //overriding
    x: 10,
    valueOf() {
        return 110;
    }
}

console.log(obj.valueOf());
console.log(object.valueOf());
console.log(typeof obj.valueOf());
console.log(typeof object.valueOf());

/* output
110
undefined
number
undefined

*/