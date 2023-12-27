//create method in objects

let obj = {
    X:1,y:2
}

// let another = obj;

const newOBJ = Object.create(obj);

newOBJ.x = 99;
// another.x = 100;

console.log(newOBJ, obj);
