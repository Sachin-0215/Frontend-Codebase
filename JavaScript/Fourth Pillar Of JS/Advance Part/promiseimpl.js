//Lets test our understanding of promises
/*
Tasks : (Don't use callbacks use only promises)
1. WAF to download data from url.
2. WAF to save that downloaded data in a file and return the filename 
3. WAF to upload the file written in previous step to a new url
*/

function download(url) {
    return new Promise(function exec(resolve, reject) {
        console.log("Start Downloading the data from given url: ", url);
        setTimeout(function down() {
            console.log("Download completed");
            const content = "ABCDEF";//assume dummy download content
            resolve(content);
        }, 4000);
    });
}

function writeFile(data) {
    /*
    writes given data into a new file
    */
    return new Promise(function exec(resolve, reject) {
        console.log("Started writing a with ", data);
        setTimeout(function write() {
            console.log("Completed wrting the data in a file");
            const filename = "file.txt";
            resolve(filename);
        }, 5000);
    })
}

function uploadData(file,url){
    /*
    upload the data from a file to given url
    */
    return new Promise(function exec(resolve, reject){
        console.log("Stared uploading ", file, "on", url);
        setTimeout(function up() {
            console.log("Upload completed ");
            const response = "SUCCESS";
            resolve(response);
        }, 2000);
    })
}

download("www.xyz.com")
    .then(function processDownload(value) {
        console.log("Downloading done with following value", value);
        return writeFile(value);
    })
    .then(function processwrite(value) {
        console.log("data written in the file with name", value);
        return uploadData(value, "www.upload.com");
    })
    .then(function processUpload(value) {
        console.log("we have uploaded with ", value);
    });