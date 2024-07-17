// Task 08: Write a program to print numbers form 1 to 10 but skip the number 5 using the continue statement
function eightTask() {
    for (let i = 1; i <= 10; i++) {
        if (i == 5) continue;
            
        console.log(i);
    }
}
function nineTask() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
        if (i == 7) break;
    }
}


function main() {
    nineTask()
}
main()