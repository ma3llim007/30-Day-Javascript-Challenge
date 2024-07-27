// Task 01: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope.
const outerFunction = (outerMessage) => {
    return function innerFunction(innerMessage) {
        console.log(`Outer Message` + outerMessage);
        console.log(`Inner Message` + innerMessage);
    }
}

// const outerFunctionObj = outerFunction("Outer");
// outerFunctionObj("Inner");

// Task 02: Create a closure that maintains a private counter. implement functions to increment and get the current value of the counter
const twoTask = () => {
    console.log("Two Task");
    let counter = 0;

    return {
        increament: function () {
            counter++;
        },
        get: function () {
            return counter;
        }
    }
}
const funOBj = twoTask();
funOBj.increament();
funOBj.increament();
funOBj.increament();
funOBj.increament();
funOBj.increament();
funOBj.increament();
funOBj.increament();
funOBj.increament();
console.log(funOBj.get());