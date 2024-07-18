// Task 03: Write a function expression to find the maximum of two numbers and log the result to the console.
function threeTask(a, b) {
    if (a >= b) {
        return a;
    } else {
        return b;
    }
}

// Task 04: Write a function expression to concatenate two strings and return the result
function fourTask(str1, str2) {
    return str1 + ' ' + str2;
}


function main() {
    let num1 = 10;
    let num2 = 5;
    let threeTaskRes = threeTask(num1, num2);
    // console.log("The Maximum Number Is " + threeTaskRes);
    let fourTaskRes = fourTask("Hello", "World");
    console.log(fourTaskRes);
}

main()