let array_of_product = {
    arr: [
        {
            name: "Macbook M2",
            price: "200000",
            description: "The new MacBook Edition",
            rating: 4.9,

            display() {
                console.log("first display ", this);
            },
            getCategory: () => {
                console.log(this.category);
            }
        }
        ,
        {
            name: "Google Pixel 7",
            price: "91000",
            description: "The new Google smartPhone",
            rating: 4.8,

            display() {
                console.log("second display ", this);
            },
            getCategory: () => {
                console.log(this.category);
            },
            getProduct: function () {
                return (this.arr);
            }
        }
    ],
    category: "Electronics"
}

// array_of_product.arr[0].getCategory();
array_of_product.getProduct()[0].getCategory();
