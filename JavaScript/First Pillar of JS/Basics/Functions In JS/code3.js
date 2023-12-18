//check whether a given number is prime or not

function isPrime(x) {
    if (x <= 1) return false;
    for (let i = 2; i <= x - 1; i += 1){
        if (x % i == 0) {
            return false;
        }
    }
    return true;
}


console.log(isPrime(1));