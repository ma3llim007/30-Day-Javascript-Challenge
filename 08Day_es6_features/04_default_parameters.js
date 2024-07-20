// Task 07: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
const sevenTask = (num1, num2 = 1) => {
    return num1 * num2;
}

const main = () => {
    let sevenTaskfun = sevenTask(7);
    let sevenTaskfun2 = sevenTask(7,7);
    console.log(sevenTaskfun2);
}
main()