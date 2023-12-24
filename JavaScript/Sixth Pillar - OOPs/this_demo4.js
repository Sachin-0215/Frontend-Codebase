const product1 = {
    name: "iPhone 13 pro",
    price: "120000",
    description:"The new iphone max pro",
    rating: 4.8,

    display:  () => {
        console.log("first display ", this);
        
        let iPhoneRed = {
            name: "iPhone 12 pro",
            price: "120000",
            
            print: () => {
                console.log(this);
            }
        }
        iPhoneRed.print();
    }
}

console.log(product1.display());