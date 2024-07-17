// Task 03: Write a program to find the largest of three numbers using nested if -else statements
function threeTask(a, b, c) {
    let largestNumber;
    if (a >= b) {
        if (a > c) {
            largestNumber = a;
        } else {
            largestNumber = c;
        }
    } else {
        if (b >= c) {
            largestNumber = b;
        } else {
            largestNumber = c;
        }
    }
    console.log('The Largest Number:- '+largestNumber);
}

function main() {
    let num1 = 6;
    let num2 = 9;
    let num3 = 3;
    threeTask(num1, num2, num3)
}
main()