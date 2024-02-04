function randomFromArray(arr){
  //Your code here to select a random element from the array passed to the function.
  let randomItem;
  randomItem = arr[Math.floor(Math.random() * arr.length)];
  return randomItem;
}
// arrayTest = [1, 3, 5, "banana"];
// console.log(randomFromArray(arrayTest));
//TODO: Export the randomFromArray function.
module.exports = randomFromArray;