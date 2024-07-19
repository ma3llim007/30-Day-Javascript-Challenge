// Task 07: add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    getData() {
        return this;
    }
}
const BookObj = new Book("Javascript", "CodewithHarry", 2024);
let result = BookObj.getData();
console.log(result);