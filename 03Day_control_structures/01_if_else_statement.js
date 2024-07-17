// Task 01: Write a program to check if number is positive,negative, or zero and log the result to the console
function oneTask(n) {
    if (n > 0) {
        console.log(n + ' Is Positive');
    }
    else if (n < 0) {
        console.log(n + ' Is Negative');
    }
    else {
        console.log(n + ' Is Neither Positive nor Negative');
    }
}

// Task 02: Write a program to check if a person is eligible to vote (age>=10) and log the result to the console
function twoTask(n) {
    if (n >= 18) {
        console.log("Yes You Are Eligible to Vote");
    } else {
        console.log("No! You Are Not Eligible to Vote");
    }
}


function main() {
    let n = 20;
    twoTask(n)
}
main()