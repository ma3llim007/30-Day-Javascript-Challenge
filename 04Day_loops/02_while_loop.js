// Task 03: Write a program to calulate the sum of numbers from 1 to 10 using a while loop
function whileLoop() {
    let sum = 0;
    let count = 1;
    while (count <= 10) {
        sum = sum + count;
        count = count + 1;
    }
    console.log("The Sum Of Numbers From 1 to 10 Is:- " + sum);
}

// Task 04: Write a program to print numbers from 10 to 1 using a while loop
function whileLoop2() {
    let count = 10;
    while (count >= 1) {
        console.log(count);
        count = count - 1;
    }

}

function main() {
    whileLoop2()
}
main()