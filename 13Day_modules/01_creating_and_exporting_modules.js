// Task 01: create a module that exports a function to add two numbers. import and use this module in another script.
import { sumTwoNumber } from "./00_modules_function.js";
const result = sumTwoNumber(10, 10);

// Task 03: create a module that exports an object representing a person with properties and methods. import and use this module in another script
import { person } from "./00_modules_function.js";
person.great();