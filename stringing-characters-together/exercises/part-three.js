//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
console.log(language.slice(0, 1) + language.slice(4, 5));
//2. Without using slice(), use method chaining to accomplish the same thing.

//console.log(language[language.indexOf("J")] + language[language.indexOf("S")]);
let initials = language[language.indexOf("J")] + language[language.indexOf("S")];
console.log(initials);
//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."

//console.log(`The abbreviation for 'JavaScript' is '${language[language.indexOf("J")] + language[language.indexOf("S")]}'.`);
console.log(`The abbreviation of ${language} is '${initials}'.`);
//4. Just for fun, try chaining 3 or more methods together, and then print the result.

//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
let newTitle = notTitleCase.replace(notTitleCase[0], notTitleCase.slice(0, 1).toUpperCase());
//newTitle = newTitle.replace[newTitle.indexOf(" ") + 1, (newTitle.toUpperCase(newTitle.indexOf(" ") + 1))];
// console.log(newTitle.indexOf(" ") + 1);
// console.log(newTitle.slice(newTitle.indexOf(" ") + 1, newTitle.indexOf(" ") + 2));
// console.log(newTitle.slice(newTitle.indexOf(" ") + 1, newTitle.indexOf(" ") + 2).toUpperCase());
newTitle = newTitle.replace(newTitle.slice(newTitle.indexOf(" ") + 1, newTitle.indexOf(" ") + 2), newTitle.slice(newTitle.indexOf(" ") + 1, newTitle.indexOf(" ") + 2).toUpperCase());
console.log(newTitle);
//OR
console.log(`${notTitleCase.replace("t", "T").replace("c", "C")}`);