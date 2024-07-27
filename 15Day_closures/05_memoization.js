// Task 07: Write a function that memoizes the results of another function. use a closures to store the results of previous computations.
function memoize(fn) {
    const cache = {};
    return function (...arg) {
        const key = JSON.stringify(arg);
        if (cache[key]) {
            return cache[key];
        }

        const results = fn(...arg);
        cache[key] = results;
        return results;
    }
}


function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

const memoizeFactorial = memoize(factorial);

console.log(memoizeFactorial(5));
console.log(memoizeFactorial(5));
console.log(memoizeFactorial(5));
console.log(memoizeFactorial(20));
console.log(memoizeFactorial(20));