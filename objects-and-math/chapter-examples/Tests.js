// let array = [1, 35, 65, 3, 80];

// function findHighNumber(array){
//    let highest;
//     // for (let i = 0; i < array.length; i++){

//     // }
//     highest = Math.max(array);

//     return highest;
// }

// console.log(findHighNumber(array));


// let values = [90, -7989.99, -25, 9.798798798789, -33.1];
// //console.log(Math.trunc(Math.abs(values[1])));
// function simplifyNumber(number){
//     let simpleNumber = Math.round(Math.abs(number));
//     return simpleNumber;
// }
//console.log(simplifyNumber(values[1]));
//console.log(values.map(simplifyNumber));


// const simplify = values.map((number) => Math.round(Math.abs(number)));
// console.log(simplify);

/////////////////////////////select random IDs
let candidates = ["a", "b", "c"];
let randomIDList = [];
function createRandomID (candidates, IDList){
    while (IDList.length < candidates.length){
        let randomID = Math.floor(Math.random() * 100);
        if (!IDList.includes(randomID)){
            //console.log(randomID);
            IDList.push(randomID);
        }
    }
    return console.log(IDList);
}
console.log(candidates);
createRandomID(candidates, randomIDList);