let product1 = {
    name: "iPhone 13 pro",
    price: "120000",
    description:"The new iphone max pro",
    rating: 4.8,

    display() {
        console.log("first display ",this);
    }
}

let product2 = {
    name: "Macbook M2",
    price: "200000",
    description:"The new MacBook Edition",
    rating: 4.9,

    display() {
        console.log("second display ",this);
    }
}

product1.display();
product2.display();

console.log(this);//refereing to some object ;, output : {}


