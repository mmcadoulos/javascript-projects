const input = require('readline-sync');

let nameFirst = input.question("Enter your first name: ");
let nameLast = input.question("Enter your last name: ");

console.log("First name: " + nameFirst);
console.log("Last name: " + nameLast);
console.log("Last, First: " + nameLast + ", " + nameFirst);