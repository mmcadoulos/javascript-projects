// Declare and assign the variables below
let shuttleName = "Determination";
let shuttleSpeedMph = 17500;
let distanceMarsKm = 225000000;
let distanceMoonKm = 384400;
let milesPerKm = 0.621;
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof(shuttleName));
console.log(typeof(shuttleSpeedMph));
console.log(typeof(distanceMarsKm));
console.log(typeof (distanceMoonKm));
console.log(typeof (milesPerKm));
// Calculate a space mission below
let distanceMarsMiles = distanceMarsKm * milesPerKm;
let hoursToMars = distanceMarsMiles / shuttleSpeedMph;
let daysToMars = hoursToMars / 24;
// Print the results of the space mission calculations below
console.log(shuttleName, "will take " + daysToMars, "days to reach Mars.");
// Calculate a trip to the moon below
let distanceMoonMiles = distanceMoonKm * milesPerKm;
let hoursToMoon = distanceMoonMiles / shuttleSpeedMph;
let daystoMoon = hoursToMoon / 24;
// Print the results of the trip to the moon below
console.log(shuttleName, "will take " + daystoMoon, "days to reach the Moon.");