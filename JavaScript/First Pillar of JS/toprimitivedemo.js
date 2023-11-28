let obj = {
    //by default it return [object,object]
};
console.log(obj.toString());//[object Object]
console.log(typeof obj.toString());//string

let object = {
    //overiding
    toString() {
        // return "Let's Learn Javascript";
        return 100;
    }
};

console.log(object.toString());
console.log(typeof object.toString());

/*
output
Let's Learn Javascript   /             
100
string
*/

