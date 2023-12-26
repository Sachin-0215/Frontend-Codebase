class Product {
    #name;//private members not accessible outside
    #price;//private members not accessible outside
    #description;//private members not accessible outside

    set name(n) {
        if (typeof (n) != 'string') {
            console.log("Invalid name passed");
            return;
        }
        this.#name = n;
    }
    get name() { return this.#name; }

    set price(p) {
        if (p < 0) {
            console.log("Invalid Price");
            return;
        }
        this.#price = p;
    }

    get price() { return this.#price; }
    

    constructor(n, p, d) {
        this.#name = n;
        this.#price = p;
        this.#description = d;
    }

    display() {//printing the properties
        console.log(this.#name,this.#price,this.#description);
    }
}

const p1 = new Product("bag", 100, "school bag");
console.log(p1);
p1.display();


// p1.#name = "Iphone";//invalid
// console.log(p1);
/*
p1.#name = "Iphone";
  ^

SyntaxError: Private field '#name' must be declared in an enclosing class
    at internalCompileFunction (node:internal/vm:74:18)
    at wrapSafe (node:internal/modules/cjs/loader:1141:20)
    at Module._compile (node:internal/modules/cjs/loader:1182:27)
    at Module._extensions..js (node:internal/modules/cjs/loader:1272:10)
    at Module.load (node:internal/modules/cjs/loader:1081:32)
    at Module._load (node:internal/modules/cjs/loader:922:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47
*/

// const p2 = new Product("MacBook M2", 200000, "MacBook Air");
// p2.setName("Iphone");
// p2.name = "M2"; p2.price = 10000; p2.description = "AirBook";
// console.log(p2);//not changing in the exact properties , it is creating new
// p2.display();

const p3 = new Product("Laptop 15 inspiron", 65000, "10 Generation i7");
console.log(p3);
p3.name = "PC";
p3.display();

console.log(p3.name);