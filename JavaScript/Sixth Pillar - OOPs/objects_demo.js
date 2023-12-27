let array = [1, 2, 3, 4, 6];

console.log(typeof array);


let obj = {
    x: 20, y: 30
}

Object.freeze(obj);//neither we can add a new property nor update old one
obj.x = 10;
console.log(obj);
// console.log(obj);//{ x: 20, y: 30 }


// console.log(obj);
// obj.x = 10;
// console.log(obj);//objects won't be updated . how to fix it . see line 10


let obj1 = {
    a:10,b:29
}

Object.seal(obj1);//we cannot add new property but we can update old ones

obj1.c = 201;//not added

obj1.b = 10;//updated old ones

console.log(obj1);


const obj2 = {
    qL: 1, ww: 2
}

obj2.qL = 10;
obj2.w = 99;
console.log(obj2);