let object = {};

console.log(typeof object.valueOf());
console.log(typeof object.toString());

console.log(10 - object.valueOf());
console.log(10 - object.toString());
console.log(101 - object.toString());
console.log(110 - object.valueOf());//110 - string

console.log(1110 - "string");

//object.toString()   -> string
//object.valueOf() -> object


//more cases on objects with toPrimitive and toNumber
let obj1 = {
    //key value pair
    x: 10,
    y: 11,
    z: 1
};

console.log("New cases -- ");
console.log(1150 - obj1);

let o = { valueOf() { return 99; } }

console.log(1000 - o);

let o1 = { toString() { return "101" } }
console.log(10 - o1);


let o3 = {
    a: 7,
    toString() {
        return {}
    }
}

console.log(10 - o3);//type error