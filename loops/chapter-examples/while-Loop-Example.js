// let i = 0;

// while (i < 51) {
//   console.log(i);
//   i++;
// }

// const input = require('readline-sync');

// let num = input.question('Please enter a positive number:');
// num = Number(num);

// while (num <= 0) {
//    num = input.question('Invalid input. Please enter a positive number:');
//    num = Number(num);
// }

// let i = 100;

// while (i > 50) {
//    console.log(i);
//    i++;
//    if (i == 353){
//     console.log(`Overflow of ${i} reached! ABORT`);
//     break;
//    }
// }
const input = require('readline-sync');
let numbers = [1, 25, 83, 492,283, "BANANA", 983];
let searchVal = input.question("What are ye searchin' fer in this here array?: ");
let i = 0;

while (i < numbers.length) {
   if (numbers[i] === Number(searchVal) || String(numbers[i]).toLowerCase() === searchVal.toLowerCase()) {
      break;
   }
   i++;
}
console.log(i);
if (i < numbers.length) {
   console.log("The value", searchVal, "was located at index", i);
} else {
   console.log("The value", searchVal, "is not in the array.");
}


