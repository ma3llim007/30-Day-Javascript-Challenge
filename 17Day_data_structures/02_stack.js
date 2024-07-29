// Task 03: Implement a stack class with methods push (add element), pop (remove element), and peek (view the top element)
class threeTaskStack {
    constructor() {
        this.item = [];
    }

    // Method to add an element to the stack
    push(value) {
        this.item.push(value);
    }

    // Method to remove an element from the stack
    pop() {
        if (this.item.length === 0) {
            console.log("Stack Is Empty");
            return null;
        }
        return this.item.pop();
    }

    // Method to view the top element of the stack
    peek() {
        if (this.item.length === 0) {
            console.log("Stack Is Empty");
            return null;
        }
        console.log(this.item[this.item.length - 1]);
    }

    displayAllItem() {
        console.log(this.item);
    }
}

// Task 04: use the stack class to resverse a string by pushing all characters onto the stack and then popping them off
class fourTaskStack {
    constructor() {
        this.item = [];
    }

    add(value) {
        this.item.push(value);
    }

    remove() {
        if (this.item.length === 0) {
            console.log("Stack Is Empty");
            return;
        }
        return this.item.pop();
    }

    display() {
        console.log(this.item);
    }
    isEmpty() {
        return (this.item.length === 0);
    }
}

function main() {
    const threeTaskStackObj = new threeTaskStack();
    threeTaskStackObj.push(1);
    threeTaskStackObj.push(2);
    threeTaskStackObj.push(3);
    threeTaskStackObj.push(4);



    const fourTaskStackObj = new fourTaskStack();
    let string = "sameer";
    for (char of string) {
        fourTaskStackObj.add(char);
    }
    let resverseString = '';
    while (!fourTaskStackObj.isEmpty()) {
        resverseString += fourTaskStackObj.remove();
    }
    console.log(resverseString);
}
main();