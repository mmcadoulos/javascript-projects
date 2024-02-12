//Try adding new properties inside constructor.
class Astronaut {
   constructor(name, age, mass){
     this.name = name;
     this.age = age;
     this.mass = mass;
   }
}

let fox = new Astronaut('Fox', 7, 12);

console.log(fox);
console.log(fox.age, fox.color);

fox.age = 9;
fox.color = 'red';

console.log(fox);
console.log(fox.age, fox.color);

//Try modifying or adding properties below.
let banana = new Astronaut("mushy", 'couple of weeks');
console.log(banana);
banana.color = 'rancid brown';
console.log(banana);

let hedgehog = new Astronaut("Chip", 3, 3, 'brown');
console.log(hedgehog);