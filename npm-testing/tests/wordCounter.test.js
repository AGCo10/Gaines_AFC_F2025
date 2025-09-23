test('Jest is working', () => { expect(1 + 1).toBe(2); });

const wordCounter = require('../src/wordCounter');
test('returns 0 for an empty string', () => {
    expect(wordCounter("")).toBe(0);
});
describe('Checks for Whitespaces', () => {
    test('returns 1 for a one word string', () => {
        expect(wordCounter("Hello")).toBe(1);
    });

    test('returns 2 for a two word string', () => {
        expect(wordCounter("Hello World")).toBe(2);
    });

    test('ignores leading spaces', () => {
        expect(wordCounter(" hello")).toBe(1);
    });

    test('ignores trailing spaces', () => {
        expect(wordCounter("hello ")).toBe(1);
    });

    test('handles multiple interior spaces as one separator', () => {
        expect(wordCounter("hello   world")).toBe(2);
    });

    test('returns 0 for whitespace-only string', () => {
        expect(wordCounter("   ")).toBe(0);
    });

    test('returns 0 for whitespace with tabs/newlines', () => {
        expect(wordCounter(" \n\t  ")).toBe(0);
    });
})

describe('Handles tests for non-string entries', () => {
    test('handles non-string input gracefully', () => {
        expect(wordCounter(123)).toBe(0);
        expect(wordCounter(null)).toBe(0);
        expect(wordCounter(undefined)).toBe(0);
        expect(wordCounter({})).toBe(0);
    });
});