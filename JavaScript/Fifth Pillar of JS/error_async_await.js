//download 
function download(url) {
    return new Promise(function exec(resolve, reject) {
        console.log("Started downloading data from given url", url);
        setTimeout(function down() {
            console.log("Download completed");
            const content = "ABCDEF";//asssume dummy download content here
            resolve(content);
            // reject(content);
        }, 3000);
    });
}
async function steps() {
    try {
        console.log("Starting steps function execution");
        const downloadData = await download("www.xyz.com");
        return downloadData;
    } catch (error) {
        console.log("we have handled the error", error);
    }
    finally {
        console.log("final executed");
    }
}

steps();