class A{}
// undefined
class B extends A{}
// undefined

b = new B();

/*
B { }
[[Prototype]]: A constructor: class B[[Prototype]]: Objectconstructor: class A[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()

*/

 class Category {
     constructor(c){
         this.categoryName = c;
     }
 }
// undefined


class Product extends Category{
    constructor(n,c){
        super(c);this.name = n;
    }
}
    
// undefined
p = new Product("Iphone","mobiles");

/*
Product {categoryName: 'mobiles', name: 'Iphone'}
categoryName
: 
"mobiles"
name
: 
"Iphone"
[[Prototype]]
: 
Category
constructor
: 
class Product
length
: 
2
name
: 
"Product"
prototype
: 
Category {constructor: ƒ}
arguments
: 
(...)
caller
: 
(...)
[[FunctionLocation]]
: 
VM553:2
[[Prototype]]
: 
class Category
[[Scopes]]
: 
Scopes[2]
[[Prototype]]
: 
Object
constructor
: 
class Category
[[Prototype]]
: 
Object

*/