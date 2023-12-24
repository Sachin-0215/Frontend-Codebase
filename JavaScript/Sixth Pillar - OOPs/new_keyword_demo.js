class Product{
    //properties
    name;
    price;
    description;

    constructor(n,p,d) {
        this.name = n;
        this.price = p;
        this.description = d;

        //note : if you return something primitive in a constructor then there is a no effect
        // return "111";
        return 10;
    }

    //behaviour
    display() {
        //print the product
    }
}


const p = new Product();//default constructor is calling after creating objects
const p1 = new Product("Bags", 1000, "School Bag");

console.log(p);
console.log(p1);
