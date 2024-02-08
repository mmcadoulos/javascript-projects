const isPalindrome = require("../palindrome");

describe("testing isPalindrome", function(){
    
    //positive test cases:

    test("should return true for a single letter", function(){
        expect(isPalindrome("a")).toBe(true);
    });

    test("should return true for a single letter repeated", function(){
        expect(isPalindrome("aaa")).toBe(true);
    });

    test("should return true for a simple palindrome", function(){
        expect(isPalindrome("aba")).toBe(true);
    });

    test("should return true for a longer palindrome", function(){
        expect(isPalindrome("racecar")).toBe(true);
    });
    
    //negative test cases:

    test("should return false for simple non-palindrome", function(){
        expect(isPalindrome("ab")).toBe(false);
    });

    test("should return false for long non-palindrome", function(){
        expect(isPalindrome("launchcode")).toBe(false);
    });

    test("should be case sensitive", function(){
        expect(isPalindrome("abA")).toBe(false);
    });

    test("should consider whitespace", function(){
        expect(isPalindrome("so many dynamos")).toBe(false);
    });

    //edge case tests:

    test("should consider empty string to be palindrome", function(){
        expect(isPalindrome("")).toBe(true);
    });

    //test("should")

})