const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
    setTimeout(reject, 100, 'foo'),
);
const promise3 = Promise.resolve(100);
const promises = [promise1, promise2, promise3];

Promise.allSettled(promises).then((results) =>
    results.forEach((result) => console.log(result.status)),
);

// Expected output:
// "fulfilled"
// "rejected"
// "fulfilled"
