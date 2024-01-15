// let name = Julie;
// console.log("Hello, name);
str = 'LaunchCode students rock!';
console.log(str.split(" "));
// console.log(str.split(""));

//these take arrays not strings
// console.log(str.join(" "));
// console.log(str.join(""));

/*
let groceryBag = ['bananas', 'apples', 'edamame', 'chips', 'cucumbers', 'milk', 'cheese'];
let selectedItems = [];

selectedItems = groceryBag.slice(2, 5).sort();
console.log(selectedItems);
*/
let school = [
    ["science", "computer", "art"],
    ["Jones", "Willoughby", "Rhodes"]
];
console.log(school[1][0]);
school[0].push("dance");
console.log(school);
school[1].unshift("Holmes");
console.log(school);