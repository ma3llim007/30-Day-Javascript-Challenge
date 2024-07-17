// Task 06: Write a program that uses the ternary operator to check if a number is even or odd and log the result the console
function ternaryStatement(n) {
    let result = (n / 2 == 0) ? (`${n} Is a Even Number`) : (`${n} Is a Odd Number`)
    console.log(result);
}

ternaryStatement(6)