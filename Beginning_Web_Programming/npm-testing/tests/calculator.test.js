const { add, subtract } = require('../src/calculator');

// Group tests under a "Calculator" describe block
describe("Calculator", () => {

    // Nested group for Addition
    describe("Addition", () => {
        test("adds two positive numbers", () => {
            expect(add(2, 3)).toBe(5);
        });

        test("adds a positive and a negative number", () => {
            expect(add(5, -2)).toBe(3);
        });
    });

    // Nested group for Subtraction
    describe("Subtraction", () => {
        test("subtracts two positive numbers", () => {
            expect(subtract(10, 4)).toBe(6);
        });

        test("subtracts a larger number from a smaller number", () => {
            expect(subtract(3, 7)).toBe(-4);
        });
    });

    describe("Functions Parameters", () => {
        test("Checks if the add function has two parameters", () => {
            expect(add.length).toBe(2);
        })
    })

});