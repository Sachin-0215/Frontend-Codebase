// Integrating generator with promises

//download 
function download(url) {
    return new Promise(function exec(resolve, reject) {
        console.log("Started downloading data from given url", url);
        setTimeout(function down() {
            console.log("Download completed");
            const content = "ABCDEF";//asssume dummy download content here
            resolve(content);
        }, 1000);
    });
}

//written file
function writeFile(data) {
    return new Promise(function exec(resolve, reject) {
        console.log("Started writting file with", data);
        setTimeout(function write() {
            console.log("Completed writting the data in a file");
            const filename = "file.txt";//asssume dummy written file here
            resolve(filename);
        }, 1000);
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

function doAfterRecieving(value) {
    let future = iter.next(value);
    console.log("Future is", future);
    if (future.done) return;
    future.value.then(doAfterRecieving);
}


function* steps() {//generator function 
    const downloadData = yield download("www.google.com");
    console.log("Data downloaded is", downloadData);

    const fileWrittendata = yield writeFile(downloadData);
    console.log("File written is", fileWrittendata);

    const uploadResponse = yield uploadData(fileWrittendata, "www.drive.com");
    console.log("Upload response is", uploadResponse);
    return uploadResponse;
}

const iter = steps();
const downloadYield = iter.next();

for (let i = 0; i < 1000000000000; i++) { }

downloadYield.value.then(doAfterRecieving);

/*

Started downloading data from given url www.google.com
Download completed
Data downloaded is ABCDEF
Started writting file with ABCDEF
Future is { value: Promise { <pending> }, done: false }
Completed writting the data in a file
File written is file.txt
Started uploading file.txt on given url www.drive.com
Future is { value: Promise { <pending> }, done: false }
upload completed
Upload response is SUCCESS
Future is { value: 'SUCCESS', done: true }

*/