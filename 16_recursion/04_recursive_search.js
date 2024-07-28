// Task 07: Write a recursive function to perform a binary search on a sorted array. log the index of the target element for a few test cases
const sevenTask = (arr, target, left = 0, right = arr.length - 1) => {
    if (left > right) {
        return -1;
    }

    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
        return mid;
    }

    if (arr[mid] > target) {
        return sevenTask(arr, target, left, mid - 1);
    }

    return sevenTask(arr, target, mid + 1, right);
}

// Task 08: Write a recursive function to count the occurrences of a target element in an array.
const eightTask = (array, target, index = 0) => {
    if (index >= array.length) {
        return 0;
    }
    let count = (array[index] === target) ? 1 : 0;
    return count + eightTask(array, target, index + 1);
}



function main() {
    let arr = [1, 2, 3,5, 5, 6, 7, 8, 5, 10, 5, 8, 5];
    let target = 5;
    let left = 0;
    let right = arr.length - 1;
    const sevenTaskObj = sevenTask(arr, target, left, right);
    const eightTaskObj = eightTask(arr, target)
    console.log(eightTaskObj);
}
main();