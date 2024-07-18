// Task 01: Write a function to check if a number is even or odd and log the result to the console
function oneTask(n) {
    if (n % 2 == 0) {
        console.log(n + " Is Even Number");
    } else {
        console.log(n + " Is Odd Number");
    }
}

// Task 02: Write a function to calculate the square of a number and result the result
function twoTask(n) {
    return n * n;
}



function main() {
    let n = 2;
    console.log(twoTask(n));
}
main()