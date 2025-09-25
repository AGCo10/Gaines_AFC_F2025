// Decomposition
// What is the objective: Convert F to C temperatures, forwards and backwards
// Identify the formula for converting F to C
// (0°C × 9/5) + 32 = 32°F
// (32°F − 32) × 5/9 = 0°C

// Functionality
// API Contracts - does it exist?

const {convertFarToCel, convertCelToFar} = require('../src')

// Section off the main test
describe ('Main Functions', () => {
    test('Should convert F to C and backwards', () => {
        expect(convertCelToFar(0)).toBe(32);
        expect(convertFarToCel(32)).toBe(0);
    });

    test('Should round whole number', () => {
        expect(convertFarToCel(34)).toBe(1);
        expect(convertCelToFar(34)).toBe(93);
    })
});

// Section off the parameter testing
describe ('Capture Edge Cases', () => {
    test('Should return NaN', () => {
        expect(convertFarToCel('string')).toBe(NaN);
        expect(convertCelToFar('string')).toBe(NaN);

    })
    test('Should detect parameters', () => {
        expect(convertFarToCel()).toBe('You did not enter a number');
        expect(convertCelToFar()).toBe('You did not enter a number')
    })
})