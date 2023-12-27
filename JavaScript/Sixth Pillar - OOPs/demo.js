var obj = {
    name: "SRK",
    company: "Red Chillies Production",
    display: () => {
        console.log(this.name, "own his production company that is", this.company);
    }
}

// obj.display();

var obj1 = {
    name: "SK",
    company: "SK Production",
    display: () => {//this display arrow function have scope in it
        // console.log(this);
        setTimeout(() => {//outside this arrow function have no access to this , so it print undefined
            console.log(this.name, "own his production company that is", this.company);
        }, 3000);
    }
}

obj1.display();


var obj2 = {
    name: "AK",
    company: "AK Production",
    display: function () {//this normal function have a definition of this callback
        console.log(this);
        setTimeout(() => {
            console.log(this.name, "own his production company that is", this.company);
        }, 3000);
    }
}

// obj2.display();
