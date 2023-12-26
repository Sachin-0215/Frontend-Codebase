//structure of a class
class Product{
    //Note : no need of let var const in the properties
    //properties
    #name;//private accessifiers
    price;
    discount;
    description;

    //Note : no need of function keyword
    //behaviour
    display(name) {
        console.log("Product name", name);
    }
    buy() {
        
    }
    wishlist() {
        
    }

}

//syntax to create an object
const p = new Product();