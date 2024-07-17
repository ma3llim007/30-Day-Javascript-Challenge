// Task 01: Write a program to print numbers from 1 to 10 using a for loop.
function printOneToTen() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

// Task 02: Write a program to print the multiplication table of 5 using a for loop
function multiplicationTable(n) {
    for (let i = 1; i <=10; i++){
        console.log(`${n} x ${i} = ${n*i}`);
    }
}

function main() {
    let n = 5;
    multiplicationTable(n)
}
main()