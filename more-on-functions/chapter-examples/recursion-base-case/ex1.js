// let arr = ['L', 'C', '1', '0', '1'];
// let newString = '';

// for (i = 0; i < arr.length; i++){
//     newString = newString + arr[i];
// }

// console.log(newString);
// console.log(arr);

let arr = ['L', 'C', '1', '0', '1'];
let newString = '';

while (arr.length > 0){
    newString += arr[0];
    arr.shift();
}
console.log(newString);
console.log(arr);