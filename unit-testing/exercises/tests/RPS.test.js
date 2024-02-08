const whoWon = require('../RPS');

describe("Check whoWon", ()=>{
    
    test("should return tie when players choose the same", ()=>{
        let output = whoWon("rock", "rock");
        expect(output).toBe('TIE!');
    });

    test("should return player 2 wins when player 1 chooses rock and player 2 chooses paper", ()=>{
        let output = whoWon("rock", "paper");
        expect(output).toBe('Player 2 wins!');
    });

    test("should return player 2 wins when player 1 chooses paper and player 2 chooses scissors", ()=>{
        let output = whoWon("paper", "scissors");
        expect(output).toBe('Player 2 wins!');
    });

    test("should return player 2 wins when player 1 chooses scissors and player 2 chooses rock", ()=>{
        let output = whoWon("scissors", "rock");
        expect(output).toBe('Player 2 wins!');
    });

    test("should return invalid input if player 1 something other than 'rock', 'paper', or 'scissors' is chosen", ()=>{
        let output = whoWon("banana", "scissors");
        expect(output).toBe("invalid input");
    });

    test("should return invalid input if player 2 selects something other than 'rock', 'paper', or 'scissors'", ()=>{
        let output = whoWon("scissors", 25);
        expect(output).toBe("invalid input");
    });


});