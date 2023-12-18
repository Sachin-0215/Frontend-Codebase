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

download("www.xyz.com")
.then(function fullfillHandler(value) {
    console.log("Content download is ", value);
});