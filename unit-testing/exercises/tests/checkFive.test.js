const checkFive = require("../checkFive");

describe("tests checkFive", ()=>{
    test("should return 'number is less than 5.' when number < 5", ()=>{
        let output = checkFive(3);
        expect(output).toBe("3 is less than 5.");
    });

    test("should return 'number is equal to 5.' when number == 5", ()=>{
        let output = checkFive(5);
        expect(output).toBe("5 is equal to 5.");
    });

    test("should return 'number is grester than 5.' when number > 5", ()=>{
        let output = checkFive(99);
        expect(output).toBe("99 is greater than 5.");
    });
});