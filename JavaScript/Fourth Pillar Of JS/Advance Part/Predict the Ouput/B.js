function fetchData(url) {
    return new Promise(function (resolve, reject) {
        console.log("Started downloading from ", url);
        setTimeout(function processDownloading() {
            let data = "dummy data";
            resolve(data);
            console.log("Download completed");
        }, 7000);
    });
}

console.log("Start");
let promiseObj = fetchData("www.google.com");
promiseObj.then(function A(value) {
    console.log("Value is", value);
})
console.log("end");