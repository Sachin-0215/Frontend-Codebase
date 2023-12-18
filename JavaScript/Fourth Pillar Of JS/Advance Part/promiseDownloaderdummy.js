function download(url) {
    console.log("Start downloading content from", url);//---->1
    return new Promise(function exec(resolve, reject) {
        setTimeout(function p() {
            console.log("completed Downloading data in 5s");
            const content = "ABCDEFG";
            resolve(content);
        }, 5000);
    })
}

x = download("www.xyz.com")
y = x.then(function fullfillHandler(value) {
    console.log("Content download is 1", value);
    return "new promise string";
    // if we dont return anything by default gives undefined
});
// z = x.then(function fullfillHandler2(value) {
//     console.log("Content download is 2", value);
// });

a = x.then(function newFullFillHandler(value) {
    console.log("Value from chained then promise", value);
});

z = x.then(function fullfillHandler(value) {
    console.log("Rejection handler with", value);
});



//Note : the .then function returns a new promise object.It immediately return a new promise object .We can use this promise object to chain the bunch of .then


console.log(a, z, x, y);