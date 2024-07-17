// Task 05: Write a program to print numbers form 1 to 5 using do-while loop
function fiveTask() {
    let count = 1;
    do {
        console.log(count);
        count = count + 1;
    } while (count <= 5);
}

// Task 06: Write a program to calculate the factorial of a number using do-while loop
function sixTask(num) {
    let count = 1;
    do {
        count *= num
        num--;
    }
    while (num >= 1)

    console.log('The factorial Of Number is:- ' + count);
}

function main() {
    let n = 5;
    sixTask(n);
}
main()