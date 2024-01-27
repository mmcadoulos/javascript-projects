//Create an anonymous function and set it equal to a variable.
let inputMorph = function (input){
    if (typeof(input) === "number"){
        return input * 3;
    } else if (typeof(input) === "string"){
        return "ARRR!";
    }
    return input;
}
console.log(inputMorph(99));
/* Your function should:
a) If passed a number, return the tripled value.
b) If passed a string, return the string “ARRR!”
c) Be sure to test your function before moving on the next part. 
*/

/* Add to your code! Use your fuction and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/
// let inputMorph = function (input){
//     if (typeof(input) === "number"){
//         return input * 3;
//     } else if (typeof(input) === "string"){
//         return "ARRR!";
//     }
//     return input;
// }
let arr = ['Elocution', 21, 'Clean teeth', 100];
let mappedArray = arr.map(inputMorph);
console.log(mappedArray);