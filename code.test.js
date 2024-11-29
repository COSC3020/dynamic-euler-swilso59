const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');

// Values of n to test
const testValues = [5, 6, 7, 8, 9, 10, 20, 40, 80, 100, 200, 400];

console.log("Testing e function for multiple values of n:");

testValues.forEach((n) => {
    console.log(`\nTesting e(${n}):`);
    
    const iterativeResult = e(n);
    console.log(`Result for e(${n}): ${iterativeResult}`);

    const recursiveResult = recursiveE(n);
    console.log(`Result for recursiveE(${n}): ${recursiveResult}`);

    

    // Assert that both results are the same
    assert(
        iterativeResult.toString() === recursiveResult.toString(),
        `e(${n}) does not match recursiveE(${n})`
    );    
});

// Recursive implementation for testing
function factorial(n) {
    if(n === 0) return 1;
    else return n * factorial(n - 1);
}

function recursiveE(n) {
    if(n === 0) return 1;
    else return 1.0 / factorial(n) + e(n - 1);
}

// Tests for recursive implementations
assert(factorial(10) === 3628800);
assert(e(10) === 2.7182818011463845);

console.log("\nAll tests passed!");
