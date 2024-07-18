let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Task 07: MAP Method
let array2 = array.map((item) => {
    return item * 2;
});

// Task 08: FILTER Method
let array3 = array.filter((item) => {
    if (item % 2 === 0) {
        return item;
    }
});
// Task 09: REDUCE Method
let array4 = array.reduce((a, b) => a + b);

console.log(array4);