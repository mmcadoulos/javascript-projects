// function combineEntries(arrayName){
//     if (arrayName.length <= 1){
//         return arrayName[0];
//     } else {
//         //call combineEntries again
//         return arrayName[0] + combineEntries(arrayName.slice(1));
//     }
// }

// let arrExample = ["A", "a", "B"];
// console.log(combineEntries(arrExample));



function decreasingSum(integer) {
    if (integer === 1){
    return integer;
    } else {
    //call decreasingSum function again
    return integer + decreasingSum(integer - 1);
    }
}
console.log(decreasingSum(25));

