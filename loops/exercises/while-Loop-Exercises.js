//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.

let fuelLevel;
let crewNumber;
let altitudeKm;
let orbit = false;
const input = require('readline-sync');

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
while (!orbit){
  console.log(`Initiating startup sequence...`)

  fuelLevel = input.question("Please enter the amount of fuel: ");

    while (fuelLevel <= 5000 || fuelLevel >= 30000){
      if (fuelLevel<=5000){
        console.log(`Sorry, the fuel level must exceed 5000.\nCurrent fuel level: ${fuelLevel}`);
    } else {
      console.log(`Sorry, the fuel level must not reach 30,000.\nCurrent fuel level: ${fuelLevel}`);
    }
    fuelLevel = input.question("Please try again: ");
    }

  console.log(`Fuel level: ${fuelLevel}\nContinuing startup sequence...`);
  // console.log(typeof(fuelLevel));



  //b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
    
  crewNumber = input.question("Please enter the number of astronauts aboard: ");

    while (crewNumber < 1 || crewNumber > 7){
      if (crewNumber < 1){
        console.log(`*static*\nArrgh this ain't gonna be a ghost ship today!\n*static*`);
      } else {
        console.log(`*static*\nMake some walk the plank! We don't need more than seven!\n*static*`);
      }
      crewNumber = input.question("How many are on board now? ");
    }
    console.log(`Crew status: ${crewNumber} on board\nContinuing...`);
    
    
  //c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
  altitudeKm = 0;
  while (fuelLevel >= 100 * crewNumber){
    fuelLevel = Number(fuelLevel) - (100 * crewNumber);
    console.log(`Fuel level: ${fuelLevel}`);
    altitudeKm = Number(altitudeKm) + 50;
    console.log(`Altitude: ${altitudeKm} km`);
  }

  /*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

  If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
  console.log(`The shuttle gained an altitude of ${altitudeKm} km.`);
  if (altitudeKm >= 2000){
    orbit = true;
    console.log("Orbit achieved!");
    return;
  } else {
    orbit = false;
    console.log("Failed to reach orbit.");
  }
  console.log("BANANAS! Let's try again!");
}