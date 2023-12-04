function f() {//fun -> global scope
    var x = 10;// f scope 
    function g() {// f scope
        var y = 20;//g scope
        console.log(x);//10
        console.log(y);//20
    }
    g();
    console.log(x);//10
    console.log(y);//eror no scope of y here in this block so it go one step outside but still not there
    // g();
} 

f();