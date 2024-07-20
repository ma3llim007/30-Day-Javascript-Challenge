// Task 03: use array destructuring to extract the first and second elements from an array of numbers and log them to the console
const threeTask = () => {
    const number = [10, 20, 30, 40, 50, 60, 70];
    const [num1, num2] = number;
    console.log(num1);
    console.log(num2);
}

// Task 04: use object destructuring to extract the title and author from a book object and log them to the console.
const fourTask = () => {
    const object = {
        title: "Javascript",
        author: "CodewithHarry",
        year: 2024,
    }
    const { title, author } = object
    console.log(title);
    console.log(author);
}


const main = () => {
    fourTask()
}


main()