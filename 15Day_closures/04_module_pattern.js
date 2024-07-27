// Task 06: use closures to create a simple module for managing a collection of items. implement methods to add, remove, and list items.
const itemManger = function () {
    let items = [];

    function addItem(item) {
        items.push(item);
    }

    function removeItem(item) {
        const index = items.indexOf(item);
        if (items.length > 0) {
            items.splice(index, 1);
        }
    }

    function itemlist() {
        return items.slice();
    }
    return {
        addItem,
        removeItem, itemlist
    }
};

const iteminstance = itemManger();

iteminstance.addItem("item 1");
iteminstance.addItem("item 2");
iteminstance.addItem("item 3");
console.log(iteminstance.itemlist());
iteminstance.removeItem("item 2");
console.log(iteminstance.itemlist());