//reference link : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

//object creation
const player = {
    firstName: 'Virat',
    lastName: 'Kohli',
    numberToBats: 3,
    canBowl: false,
    getDetails: function () {
        console.log(this.firstName, this.lastName, "comes at No.", this.numberToBats);
    }
}

// const obj = function () {
//     console.log(this.getDetails());//this obj function is trying to access this.getDetails
// }

// let x = obj.bind(player);//its creates a new function , so it should be storing in a variable
// console.log(x);
// x();

//bind returns you a completetly new function and 
const obj = function (x, y) {
    console.log(x + y);
    this.getDetails();
}



// obj(); problem
obj.call(player,2,45);

// call will immediately call the same function with the object binded towards this context

/*
    Reference link : 
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
*/