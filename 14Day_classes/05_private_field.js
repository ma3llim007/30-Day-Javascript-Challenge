// Task 09: define a class Account with private fields for balance and a method to deposite and withdraw methods, logging the balance after each operation.
class Account {
    #balance;
    constructor(initialBalance = 0) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: ${amount}. New Balance: ${this.#balance}`);
        } else {
            console.log('Deposit amount must be positive.');
        }
    }

    withdraw(amount) {
        if (amount >0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew: ${amount}. New Balance: ${this.#balance}`);
        } else if (amount > this.#balance) {
            console.log('Insufficient funds.');
        } else {
            console.log('Withdrawal amount must be positive.');
        }
    }

    get balance() {
        console.log(`Current Balance Is:- ${this.#balance}`);
    }
}

// Task 10: Create an instance of the account class and test the deposit and withdraw methods, logging the balance after each operation.
const accountObj = new Account(100);
accountObj.deposit(100);
accountObj.withdraw(20);
accountObj.balance;