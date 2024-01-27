let names = ["Chris", "Jim", "Sally", "Blake", "Paul", "John", "Courtney", "Carly"];

// TODO: Write a mapping function
function extractFirstInitial(str){
    return str.slice(0, 1);
}
// and pass it to .map()
let firstInitials = names.map(extractFirstInitial);

console.log(firstInitials);
