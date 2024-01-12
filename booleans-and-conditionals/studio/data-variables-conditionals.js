// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 	760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
const maximumMassLimit = 	850000;
let fuelTempCelsius = -225;
const minimumFuelTemp = -300;
const maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "clear";
let preparedForLiftOff = true;
let astronautCountCheck = false;
let astronautStatusCheck = false;
let totalMassCheck = false;
let letFuelTempCheck = false;
let fuelLevelCheck = false;
let weatherStatusCheck = false;
// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7){
   // console.log("astronaut count: pass");
    astronautCountCheck = true;
} else {
    console.log("astronaut count: fail");
}
// add logic below to verify all astronauts are ready
if (astronautStatus === "ready"){
    //console.log("astronaut status: pass");
    astronautStatusCheck = true;
} else {
    console.log("astronaut status: fail");
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg < maximumMassLimit){
    //console.log("mass check: pass");
    totalMassCheck = true;
} else {
    console.log("mass check: fail");
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius <= maximumFuelTemp && fuelTempCelsius >= minimumFuelTemp){
    //console.log("fuel check: pass");
    letFuelTempCheck = true;
} else {
    console.log("fuel check: fail");
}
// add logic below to verify the fuel level is at 100%
if (fuelLevel === "100%"){
    //console.log("fuel level: pass");
    fuelLevelCheck = true;
} else {
    console.log("fuel level: fail");
}
// add logic below to verify the weather status is clear
if (weatherStatus === "clear"){
    //console.log("weather status: pass");
    weatherStatusCheck = true;
} else {
    console.log("weather status: fail");
}
// Verify shuttle launch can proceed based on above conditions
if (astronautCountCheck && astronautStatusCheck && totalMassCheck && letFuelTempCheck &&fuelLevelCheck && weatherStatusCheck){
    preparedForLiftOff = false;
}
if (!preparedForLiftOff){
    console.log("All systems are a go! Initiating space shuttle launch sequence.");
    console.log("Date:" + date);
    console.log("Time: " + time);
    console.log("Astronaut Count: " + astronautCount);
    console.log("Crew Mass: " + crewMassKg, "kg");
    console.log("Fuel Mass" + fuelMassKg, "kg");
    console.log("Shuttle Mass: " + shuttleMassKg, "kg");
    console.log("Total Mass: " + totalMassKg, "kg");
    console.log("Fuel Temperature: " + fuelTempCelsius, "°C");
    console.log("Weather Status: " + weatherStatus);
    console.log("Have a safe trip astronauts!");

}