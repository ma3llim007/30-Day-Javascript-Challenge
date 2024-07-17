// Task 01: Write a program that uses the && operator to combine two conditions and log the result to the console.
function oneLogical(a, b) {
    if (a==b && b==a) {
        console.log("Both Variable Are Same");
    } else {
        console.log("Both Variable Are Not Same");
    }    
}

// Task 02: Write a program that uses the || operator to combine two conditions and log the result to the console
function twoLogical(a, b) {
    if (a==b || b==a) {
        console.log("Both Variable Are Same");
    } else {
        console.log("Both Variable Are Not Same");
    }    
}

// Task 03: Write a program that uses the ! operator to negate a condition and log the result to the console
function threeLogical(a, b) {
    if (a != b) {
        console.log("Both Variable Are Not Same");
    } else {
        console.log("Both Variable Are Same");
    }
}
function main() {
    let num1 = 1;
    let num2 = '1';
    threeLogical(num1,num2)
}
main()