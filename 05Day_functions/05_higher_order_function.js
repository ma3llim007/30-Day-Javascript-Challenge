// Task 09: Write a higher-order function that takes a function and a number, and calls the function that many times.
function display(n) {
    console.log(n + ". Hello World ");
}

function nineTask(fun, n) {
    for (let i = 1; i <= n; i++) {
        fun(i);
    }

}
// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
function tenTask(fun1, fun2, val1, val2) {
    let fun1Re = fun1(val1, val2);
    let fun2Re = fun2(fun1Re);
    console.log(fun2Re);
}

function sum(a, b) {
    return a + b;
}

function divide(c) {
    return (c / 2);
}

function main() {
    // nineTask(display, 5)
    tenTask(sum, divide, 100, 10);
}
main()