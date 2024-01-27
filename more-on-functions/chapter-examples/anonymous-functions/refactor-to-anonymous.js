let reverse = function (str) {
  let lettersArray = str.split('');
  let reversedLettersArray = lettersArray.reverse();
  return reversedLettersArray.join('');
};

console.log(reverse("LaunchCode"));
let f2 = reverse;
console.log(f2("banana"));