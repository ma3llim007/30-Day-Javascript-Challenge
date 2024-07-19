// Task 08: use a for...in loop to iterate over the properties of the book object and log each property and its value.
let BookObject = {
    title: "Javascript",
    author: "CodewithHarry",
    year: 2024
}

for (obj in BookObject) {
    console.log(`Key Is:- ${obj} Its Value Is:- ${BookObject[obj]}`);
}


// Task 09: Use Object.key and object.values methods to log all the keys and values of the book object.
console.log(Object.keys(BookObject));
console.log(Object.values(BookObject));