const isPalindrome = require('../src/index')

// Describe the main concept of the test
describe("Palindrome Test", () => {
    // Describe the main section of the test
    describe("Primary Function", () => {
        test("confirm if isPalindrome is a function", () => {
            expect(typeof isPalindrome).toBe('function');
        })
        test('function takes only 1 argument', () => {
            expect(isPalindrome.length).toBe(1)
            expect(isPalindrome('racecar', 'racecar')).toBe(false)
        })
         test('function should check one word if Palindrome forward and backward', () => {
             expect(isPalindrome('racecar')).toBe(true)
             expect(isPalindrome('101')).toBe(true)
        })
    })

    // describe the edge case testing
    describe("Exemption testing for Function", () => {
        test('function input only takes strings', () => {
            expect(isPalindrome([])).toBe(false);
            expect(isPalindrome(1234)).toBe(false);
            expect(isPalindrome(145.43)).toBe(false);
            expect(isPalindrome('a')).toBe(false);
            expect(isPalindrome(false)).toBe(false);
            expect(isPalindrome(module)).toBe(false);
            expect(isPalindrome(null)).toBe(false);
            expect(isPalindrome(NaN)).toBe(false);
            expect(isPalindrome(101)).toBe(false);
        })
        test('function should check for empty arguments', () => {
            expect(isPalindrome('')).toBe(false);
        })
        test('function should check if there are blanks/spaces in the statement', () => {
             expect(isPalindrome(' racecar ')).toBe(true);
        })
        test('function should check if there are blanks/spaces and multiple words in the statement', () => {
            expect(isPalindrome('Madam I\'m Adam')).toBe(true);
        })
        test('function should check if there are unique characters or capitals in the statement', () => {
            expect(isPalindrome('Red rum, sir, is murder.')).toBe(true);
        })
    })

})