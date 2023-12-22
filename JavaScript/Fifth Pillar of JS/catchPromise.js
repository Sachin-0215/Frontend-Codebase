//download 
function download(url) {
    return new Promise(function exec(resolve, reject) {
        console.log("Started downloading data from given url", url);
        setTimeout(function down() {
            console.log("Download completed");
            const content = "ABCDEF";//asssume dummy download content here
            // resolve(content);
            reject(content);
        }, 6000);
    });
}

//write file
function writeFile(data) {
    return new Promise(function exec(resolve, reject) {
        console.log("Started writting file with", data);
        setTimeout(function write() {
            console.log("Completed writting the data in a file");
            const filename = "file.txt";//asssume dummy written file here
            resolve(filename);
        }, 5000);
    });
}
//upload data
function uploadData(file, url) {
    return new Promise(function exec(resolve, reject) {
        console.log("Started uploading", file, "on given url", url);
        setTimeout(function upl() {
            console.log("upload completed");
            const msg = "SUCCESS";//asssume dummy uploaded data msg
            resolve(msg);
        }, 2000);
    });
}

download("www.xyz.com")
    .then(
        function processDownload(value) {//fullfillhandler
            console.log("downloading done with following value", value);
            return writeFile(value);
        }
    )
    .then(
        function processWrite(value) {//fullfillhandler
            console.log("Data written in the file with name", value);
            return uploadData(value, "www.upload.com");
        }
    )
    .then(
        function processuPLOAD(value) {//fullfillhandler
            console.log("we have uploaded with", value);
        }
    )
    .catch(
        function f(err) {
            console.log("catching error", err);
        }
    )
    .finally(
        function finalFunction() {
            console.log("Final executed");
        }
    )