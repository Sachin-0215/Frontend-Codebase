let obj = {};
console.log(obj.toString());
console.log(typeof obj.toString());//[object Object]

let object = {
    //overiding
    toString() {
        return "Let's Learn Javascript";
    }
};

console.log(object.toString());
console.log(typeof object.toString());
/*
output
Let's Learn Javascript
string
*/