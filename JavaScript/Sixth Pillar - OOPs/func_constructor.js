function Product(n, p, d) {
    this.name = n;
    this.price = p;
    this.description = d; 
    
    this.display = function() {
        console.log(this);
    }

    //return 10;//this primitive return will not affect anything
    return this;
    // return {};//empty objects
}


const p = new Product("Power Bank", 1000, "Brand new power bank");
console.log(p);
p.display();