/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all 
    - promise_allSettled - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled
    - Promise.any - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any
    - promise.race - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race

*/



//download 
function download(url,time) {
    return new Promise(function exec(resolve, reject) {
        console.log("Started downloading data from given url", url);
        setTimeout(function down() {
            console.log("Download completed for url : ",url);
            const content = "ABCDEF";//asssume dummy download content here
            if (time > 1000) { reject("err"); }
            else { resolve(content); }
        }, time);
    });
}

const Pr1 = download("www.abc1.com",5000);
const Pr2 = download("www.abc2.com",1000);
const Pr3 = download("www.abc3.com",3000);

Promise.all([Pr1, Pr2, Pr3]).then(
    function fullfillhandler(value) {
        console.log("Downloading done with value", value);
    }
);