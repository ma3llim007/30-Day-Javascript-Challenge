// Task 07: Write a program to print a pattern using nested for loop
for (let i = 0; i < 5; i++){
    let row = '';
    for (let j = 0; j <= i; j++){
        row += '*'
    }
    console.log(row);
}