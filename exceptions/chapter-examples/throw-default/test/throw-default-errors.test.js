const tester = require('../throw-default-error');

describe("testing throws", function(){
    expect(tester).toThrow(new Error('You cannot divide by zero!'));

});