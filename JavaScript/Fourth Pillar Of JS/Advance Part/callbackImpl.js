//Lets test our understanding of callback
/*
Tasks : (Don't use promises use only callbacks)
1. WAF to download data from url.
2. WAF to save that downloaded data in a file and return the filename 
3. WAF to upload the file written in previous step to a new url
*/


function download(url, cb) {
    /*
    Download content from the given url and passed the downloaded content to the given callback cb
    */
    console.log("Start Downloading the data from given url: ", url);
    setTimeout(function down() {
        console.log("Download completed");
        const content = "ABCDEF";//assume dummy download content
        cb(content);
    }, 4000);
}

function writeFile(data, cb) {
    /*
    writes given data into a new file
    */
    console.log("Started writing a with ", data);
    setTimeout(function write() {
        console.log("Completed wrting the data in a file");
        const filename = "file.txt";
        cb(filename);
    }, 5000);
}

function upload(url, file, cb){
    /*
    upload the data from a file to given url
    */
    console.log("Stared uploading ", file, "on", url);
    setTimeout(function up() {
        console.log("Upload completed ");
        const response = "SUCCESS";
        cb(response);
    }, 2000);
}


download("www.xyz.com", function processDownload(content) {
    console.log("we are now going to process the downloaded data ");
    writeFile(content, function processWriteFile(filename) {
        console.log("we have downloaded amd written the file now upload wll started");
        upload("www.upload.com", filename, function processUpload(response) {
            console.log("we have uploaded with ", response);
        });
    });
});//callback hell