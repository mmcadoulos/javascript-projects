
let launchcode = {
  organization: "nonprofit",
  executiveDirector: "Jeff",
  percentageOfCoolEmployees: 100,
  programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
  launchOutput: (num)=>{
    let output = "";
    if (num%2 === 0 || num%3 === 0 || num%5 === 0){
        if (num%2 === 0 && num%3 !== 0 && num%5 !== 0){
            output = 'Launch!';
        } else if (num%3 === 0 && num%2 !== 0 && num%5 !== 0){
            output = 'Code!';
        } else if (num%5 === 0 && num%2 !== 0 && num%3 !== 0){
            output = 'Rocks!';
        } else if (num%2 === 0 && num%3 === 0 && num%5 !== 0){
            output = 'LaunchCode!';
        } else if (num%3 === 0 && num%5 === 0 && num%2 !== 0){
            output = 'Code Rocks!';
        } else if (num%2 === 0 && num%5 === 0 && num%3 !== 0){
            output = 'Launch Rocks! (CRASH!!!!)';
        } else if (num%2 === 0 && num%3 === 0 && num%5 === 0){
            output = 'LaunchCode Rocks!';
        }
     } else {
        output = "Rutabagas! That doesn't work.";
     }
     return output;
    }
}

module.exports = launchcode;

