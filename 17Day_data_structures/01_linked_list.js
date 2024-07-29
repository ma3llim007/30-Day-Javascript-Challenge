// Task 01: Implement a node class to represent an element in a linked list with properties value and next
class oneTaskNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Task 02: Implement a linkedlist class with methods to add a node to the end, remove a node from the end, and display all nodes.
class twoTaskNode{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList{
    constructor() {
        this.head = null;
    }

    addToEnd(value) {
        const newNode = new twoTaskNode(value);

        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    display() {
        if (!this.head) {
            console.log('The List Is Empty');
            return;
        }
        let current = this.head;
        const values = [];
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        console.log(values);
    }

    removeFromEnd() {
        if (!this.head) {
            console.log("The List is Empty");
            return;
        }
        if (!this.head.next) {
            this.head = null;
            return;
        }
        let current = this.head;
        let previous = null;

        while (current.next) {
            previous = current;
            current = current.next;
        }
        previous.next = null;
    }
}
const main = () => {
    const firstNode = new oneTaskNode(1);
    const secondNode = new oneTaskNode(2);
    firstNode.next = secondNode;

    const list = new LinkedList();
    list.addToEnd(1);
    list.addToEnd(2);
    list.addToEnd(3);
    list.display();
    list.removeFromEnd();
    list.display();
}
main();