// Task 03: Write a recursive function to find the sum of all elements in an array. log the result for a few test cases
const threeTask = (num) => {
    if (num.length === 0) {
        return 0;
    }
    return num[0] + threeTask(num.slice(1));
}

// Task 04: Write a recursive function to find the maximum element in an array. log the result for a few test cases
const fourTask = (numbers,n) => {
    if (n === 1) {
        return numbers[0];
    }

    return Math.max(numbers[n - 1], fourTask(numbers, n - 1));
}

function main() {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const threeTaskObj = threeTask(array);
    const fourTaskObj = fourTask(array,array.length);
    console.log(fourTaskObj);
}
main()