const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}

// TODO 1: write a validator 
// that ensures input starts with "a"
let isFirstLetterA = function(str){
  if (str[0].toLowerCase() != "a"){
    return false;
  }
  return true;
};
// TODO 2: write a validator 
// that ensures input is a vowel
let isFirstLetterVowel = function(str){
  if (str[0].toLowerCase() != "a" && str[0].toLowerCase() != "e" && str[0].toLowerCase() != "i" && str[0].toLowerCase() != "o" && str[0].toLowerCase() != "u"){
    return false;
  }
  return true;
};
// Be sure to test your code!
// console.log(getValidInput("Enter a word that begins with 'a': ", isFirstLetterA));
console.log(getValidInput("Enter a word that begins with a vowel: ", isFirstLetterVowel));