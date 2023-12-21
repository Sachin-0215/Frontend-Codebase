//download 
function download(url) {
    return new Promise(function exec(resolve, reject) {
        console.log("Started downloading data from given url", url);
        setTimeout(function down() {
            console.log("Download completed");
            const content = "ABCDEF";//asssume dummy download content here
            resolve(content);
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
function uploadData(file,url) {
    return new Promise(function exec(resolve, reject) {
        console.log("Started uploading",file, "on given url", url);
        setTimeout(function upl() {
            console.log("upload completed");
            const msg = "SUCCESS";//asssume dummy uploaded data msg
            resolve(msg);
        }, 2000);
    });
}


async function steps() {
    console.log("Starting steps function execution");
    const downloadData = await 10;
    console.log("Data downloaded is", downloadData);

    const fileWrittendata = await writeFile(downloadData);
    console.log("File written is", fileWrittendata);

    const uploadResponse = await uploadData(fileWrittendata, "www.drive.com");
    console.log("Upload response is", uploadResponse);
    return uploadResponse;
}

console.log("start");
steps();
console.log("end");



