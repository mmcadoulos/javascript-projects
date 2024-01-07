const input = require('readline-sync');

//let num1 = input.question("Enter a number: ");
//let num2 = input.question("Enter another number: ");

/*console.log(num1 + num2);
console.log(typeof num1, typeof num2);
console.log(typeof Number(num1));
console.log(typeof Number(num2));
console.log(Number(num1) + Number(num2));*/

//for the variable to be changed it must be an assignment statement
/*num1 = Number(num1);
num2 = Number(num2);
console.log(num1 + num2);*/

//Entering the input into the number function coverts the input into a number instantly
num1 = Number(input.question("Enter first number again: "));
num2 = Number(input.question("Enter second number again: "));
console.log(num1 + num2);