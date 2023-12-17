function download(url, cb) {
    console.log("Started downloading from url", url);
    setTimeout(function exc() {
        console.log("completed downloading data in 5s");
        const content = "HD MOVIE ";
        cb(content); cb(content);
    }, 5000);
}

download("www.xyz.com", function processDownloading(data) {
    console.log("Download data is ", data);
});