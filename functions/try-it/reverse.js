// function reverse(str) {
//    let lettersArray = str.split('');
//    let reversedLettersArray = lettersArray.reverse();
//    return reversedLettersArray.join('');
// }

function reverse(str) {
   return str.split("").reverse().join("");
}

console.log(reverse("atoyotasatoyota"));