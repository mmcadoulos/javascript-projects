let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let foodCab = food.split(",").sort();
let equipmentCab = equipment.split(",").sort();
let petsCab = pets.split(",").sort();
let sleepAidsCab = sleepAids.split(",").sort();
//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [
    foodCab,
    equipmentCab,
    petsCab,
    sleepAidsCab
]
//console.log(cargoHold);
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
// const input = require('readline-sync');
// let selection = input.question("Please select the number of the cabinet you would like to see (0-3): ");
//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
// if (selection > 3 || selection < 0){
//     selection = input.question("ERROR\nPlease select the number of the cabinet you would like to see (0-3): ");
//     console.log(`This cabinet holds: ${cargoHold[selection]}`);
// } else {
//     console.log(`This cabinet holds: ${cargoHold[selection]}`);
// }
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
const input = require('readline-sync');
console.log(`The cargo hold contains four cabinets:\n0: Food Cabinet\n1: Equipment Cabinet\n2: Pets Cabinet\n3: Sleep-aids Cabinet`)
let inputCabinet = input.question("Please select the number of the cabinet you would like to check (0-3): ");
// console.log(typeof(inputCabinet));
// console.log(Number(inputCabinet));

if (inputCabinet > 3 || inputCabinet < 0 ||typeof(inputCabinet) != "number"){
    //Number(inputCabinet) != Number(inputCabinet) returns true if it is NaN but the typeof check rules out that scenario   
    inputCabinet = input.question("ERROR\nPlease select the number of the cabinet you would like to check (0-3): ");
    };
    // console.log(typeof(inputCabinet));
    let inputItem = input.question("What item are you looking for?: ");
if (cargoHold[inputCabinet].includes(inputItem)){
        console.log(`Cabinet ${inputCabinet} DOES include ${inputItem}.`);
    } else {
        console.log(`Cabinet ${inputCabinet} DOES NOT include ${inputItem}.`);
    };
    console.log(`This cabinet contains:\n${cargoHold[inputCabinet].join(",\n")}`);