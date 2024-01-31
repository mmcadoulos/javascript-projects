let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6
};

let beagle = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5
}

let tardigrade = {
   name: "Almina",
   species: "Tardigrade",
   mass: .0000000001,
   age: 1
}
// After you have created the other object literals, add the astronautID property to each one.
superChimpOne["astronautID"] = 1;
salamander["astronautID"] = 3;
superChimpTwo["astronautID"] = 5;
beagle["astronautID"] = 7;
tardigrade["astronautID"] = 9;

superChimpOne["move"] = function(){
   return Math.round(Math.random()*10);
};
salamander["move"] = function(){
   return Math.round(Math.random()*10);
};
superChimpTwo["move"] = function(){
   return Math.round(Math.random()*10);
};
beagle["move"] = function(){
   return Math.round(Math.random()*10);
};
tardigrade["move"] = function(){
   return Math.round(Math.random()*10);
};


// Create an array to hold the animal objects.
let animalCrew = [
   superChimpOne,
   salamander,
   superChimpTwo,
   beagle,
   tardigrade
];
// console.log(animalCrew);
// Print out the relevant information about each animal.

function crewReports(crewMember){
   return console.log(`'${crewMember.name}' is a ${crewMember.species}. They are ${crewMember.age} years old and ${crewMember.mass} kilograms. Their ID is ${crewMember.astronautID}.'`);
}
//crewReports(beagle);
// Start an animal race!
function fitnessTest(array){
   let results =[];
   for (let i = 0; i < array.length; i++){
      //calculate this animal's number of turns, then prnt the results as a string and store it in the array
      let steps = 0;
      let turns = 0;
      while (steps < 20){
         steps = steps + array[i].move();
         turns ++;
         // console.log(j);
      }
      result = `${array[i].name} took ${turns} turns to take ${steps} steps.`;
      results.push(result);
   }
   return results;
}



//console.log(tardigrade.move());
console.log(fitnessTest(animalCrew));