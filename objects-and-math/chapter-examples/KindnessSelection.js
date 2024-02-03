function randomSelection(arr){
   let index = Math.floor(Math.random()*arr.length);
   return arr[index];
 }
 
 let happiness = ['Hope', 'Joy', 'Peace', 'Love', 'Kindness', 'Puppies', 'Kittens', 'Tortoise'];
 
 let words = ['Hello', 'World', 'Python', 'JavaScript', 'Rutabaga'];
 
//  for (i=0; i < 8; i++){
//    console.log(randomSelection(happiness));
//  }
 
 //Experiment with the code above. Try to:
 //a) Print 3 random selections from each array.

 function a(happiness, words){
  for (let i = 0; i < 3; i++){
    console.log(randomSelection(happiness));
  }
  for (let i = 0; i < 3; i++){
    console.log(randomSelection(words));
  }
  return;
}
//a(happiness, words);


 //b) Have the code randomly pick one array, and then print 2 random items from it.

function selectRandomArray(arrs){
  let options = [];
  for (let i= 0; i < arguments.length; i++){
    options.push(arguments[i]);
  }
  return options[Math.floor(Math.random() * options.length)];
 }
 //console.log(selectRandomArray(happiness, words));
 function b (randomArray, randomSelection, arr1, arr2){
  let array = randomArray(arr1, arr2);
  for (let i = 0; i < 2; i++){
    console.log(randomSelection(array));
  }
  return ;
}
//b(selectRandomArray, randomSelection, happiness, words);


 //c) Create a new array, then fill it with one random item from words and happiness. Print the new array.
 function c(randomSelection, words, happiness){
  let newArray = [];
  newArray.push(randomSelection(words));
  newArray.push(randomSelection(happiness));
  return newArray;
 }

 console.log(c(randomSelection,words,happiness));