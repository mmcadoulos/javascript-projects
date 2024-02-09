// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test("testing organization", ()=>{
    console.log(launchcode.organization);
    expect(launchcode.organization).toBe("nonprofit");
  });

  test("testing executiveDirector", ()=>{
    expect(launchcode.executiveDirector).toBe("Jeff");
  });

  test("testing percentageOfCoolEmployees",()=>{
    expect(launchcode.percentageOfCoolEmployees).toBe(100);
  });

  test("testing programsOffered", ()=>{
    //console.log(launchcode.programsOffered);
    expect(launchcode.programsOffered).toEqual(["Web Development", "Data Analysis", "Liftoff"]);
  });
    expect(launchcode.programsOffered.length).toBe(3);

  test("testing launchOutput()", ()=>{
    expect(typeof launchcode.launchOutput()).toBe("string");
    expect(launchcode.launchOutput(4)).toBe("Launch!");
    expect(launchcode.launchOutput(9)).toBe('Code!');
    expect(launchcode.launchOutput(25)).toBe('Rocks!');
    expect(launchcode.launchOutput(91)).toBe("Rutabagas! That doesn't work.");
    expect(launchcode.launchOutput(6)).toBe('LaunchCode!');
    expect(launchcode.launchOutput(15)).toBe('Code Rocks!');
    expect(launchcode.launchOutput(10)).toBe('Launch Rocks! (CRASH!!!!)');
    expect(launchcode.launchOutput(30)).toBe('LaunchCode Rocks!');
  });

});