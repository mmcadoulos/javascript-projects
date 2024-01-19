const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
//newStr = str.slice(0, 3);
//console.log(newStr);
// newStr = str.slice(3).concat(newStr);
// console.log(newStr);
//Use a template literal to print the original and modified string in a descriptive phrase.
//console.log(`original: ${str}\nnew string:${newStr}`);
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
// let userNum = Number(input.question("Please input number of letters to remove: "));
// newStr = str.slice(0, userNum);
// newStr = str.slice(userNum).concat(newStr);
// console.log(newStr);
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
let userNum = Number(input.question("Please input number of letters to remove: "));
if (userNum < str.length){
    newStr = str.slice(0, userNum);
newStr = str.slice(userNum).concat(newStr);
console.log(`New string: ${newStr}`);
} else {
    newStr = str.slice(0, 3);
newStr = str.slice(3).concat(newStr);
console.log(`Input higher than string length, default to 3\nnew string: ${newStr}`);
}