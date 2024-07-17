// Task 1: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console 
function ternaryfun(n) {
    let result = (n > 0) ? `${n} Is Positive` : (n < 0) ? `${n} Is Negative` : `${n} Is Neither Positive nor Negative`;
    console.log(result);
}


function main() {
    let num = 0;
    ternaryfun(num)
}
main()