// Task 03: add a method to the book object that returns a string with the book's title and author, and log the representing of calling this method
class Book{
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getTitleAndAuthor() {
        return `Title Is :- ${this.title} And Author Name Is:- ${this.author}`;
    }
    UpdateYear(year) {
        this.year = year;
        console.log(this);        
    }
}
const BookObj = new Book("Javascript", "CodewithHarry", 2024);
let result = BookObj.getTitleAndAuthor();


// Task 04: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object
let result2 = BookObj.UpdateYear(5656);
