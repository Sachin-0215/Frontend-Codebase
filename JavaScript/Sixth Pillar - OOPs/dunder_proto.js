function Product(n) {
    this.name = n;
}
// undefined
let d = new Product("Learn something");
// undefined

// VM289:3 Uncaught SyntaxError: Unexpected token '}'
Product.prototype.display = function () {
    console.log("name of the product",this.name);
}
// ƒ () {
    // console.log("name of the product",this.name);
// }

d.constructor
// ƒ Product(n) {
    // this.name = n;
// }
d
// Product {name: 'Learn Something'}
d.__proto__
// {display: ƒ, constructor: ƒ}display: ƒ ()constructor: ƒ Product(n)[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: nullget __proto__: ƒ __proto__()set __proto__: ƒ __proto__()get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
d.__proto__.proto__
// undefined
d.__proto__===Product.prototype
// true