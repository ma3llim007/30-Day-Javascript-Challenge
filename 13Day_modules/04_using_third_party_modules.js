// Task 06: install third-party modules (eg.lodash) using npm import and use a function from this module in a script
import axios from "axios";
import _ from "lodash";

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const array2 = _.chunk(array,2);


// Task 07: install a third-party module (e.g, axios) using npm. import and use this module to make a network request in a script
const sevenTask = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}
sevenTask();