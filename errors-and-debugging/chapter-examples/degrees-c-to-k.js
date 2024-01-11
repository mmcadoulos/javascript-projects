const input = require('readline-sync');

let degreesC = input.question('Temp in degrees C: ');
let degreesK = degreesC + 273.15;

console.log('Degrees K:', degreesK);

//boolean chapter tests:
/*
console.log(4 == "4");
let myVariable = "banana";
myVariable += " bill";
console.log(myVariable);
console.log(Boolean("FALSE"));
*/
/*
let billHasBeenPaid = false;
const userInput = require('readline-sync');
let billStatus = userInput.question("If the check is in the mail? Y or N: ");
if (billStatus !== "Y") {
    billHasBeenPaid = false;
} else {
    billHasBeenPaid = true;
}
if (!billHasBeenPaid) {
   console.log("Your bill is due soon!");
} else {
    console.log("Thank you!");
}
*/
/*
let a = 4;
if (a % 2 === 1) {
   console.log("Launch");
} else if (a > 5) {
   console.log("Code");
} else {
   console.log("LaunchCode");
}
*/
