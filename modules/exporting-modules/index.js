// Import the modules exported from practiceExports.js below:
// const palindromeCheck = require('./practiceExports');

// console.log(typeof palindromeCheck);
// console.log(palindromeCheck('that'));
// console.log(palindromeCheck('radar'));


const practice = require('./practiceExports');
let arr = ["Hello", "World", 123, 987, "LC101"];

// console.log(typeof practice);
// console.log(practice);
// console.log(typeof practice["isPalindrome"]);

console.log(practice.isPalindrome("mom"));
console.log(practice.evenOrOdd(9));

for (i=0; i < 3; i++) {
    console.log(practice.randomArrayElement(arr));
}
