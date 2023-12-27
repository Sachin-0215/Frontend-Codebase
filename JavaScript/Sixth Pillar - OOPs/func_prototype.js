function AB() {}
// undefined
function BA() {}
// undefined
new AB();
// AB {}[[Prototype]]: Objectconstructor: ƒ AB()[[Prototype]]: Object
new BA();
// BA {}[[Prototype]]: Objectconstructor: ƒ BA()[[Prototype]]: Object
// Object.setPrototypeOf(AB.prototype,BA.prototype);
// BA {constructor: ƒ}

x = new AB();
// AB {}

x
// AB {}[[Prototype]]: BAconstructor: ƒ AB()[[Prototype]]: Objectconstructor: ƒ BA()[[Prototype]]: Object{}

function AB() {}
// undefined
function BA() {}
// undefined
AB.prototype.fun = function () {
    console.log("Having fun");
}
// ƒ () {
    // console.log("Having fun");
// }
function BA() {}
// undefined
Object.setPrototypeOf(BA.prototype,AB.prototype);
// AB {constructor: ƒ}
y = new BA();
// BA {}
y.fun();
// Having fun