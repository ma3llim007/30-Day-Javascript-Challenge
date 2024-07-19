// Task 05: Create a nested object representing a library with properties like name and book (an array of book object ), and log the library object to the console.
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    getTitleAndAuthor() {
        return `Title Is :- ${this.title} And Author Name Is:- ${this.author}`;
    }
}

const Library = {
    name: "City Library",
    book: [
        new Book("1984", "George Orwell"),
        new Book("To Kill a Mockingbird", "Harper Lee"),
        new Book("The Great Gatsby", "F. Scott Fitzgerald")
    ]
}

// Task 06: Access and log name of the library and the title of all the book in the library
function sixTask(lib) {
    console.log(lib.name);
    lib.book.forEach((item) => {
        console.log(item.title);
    })
}
sixTask(Library)